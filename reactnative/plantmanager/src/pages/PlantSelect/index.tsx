import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { EnvironmentButton } from '../../components/EnvironmentButton'
import { Header } from '../../components/Header'
import { PlantCardPrimary } from '../../components/PlantCardPrimary'
import { api } from '../../services/api'

import {
  Container,
  HeaderContainer,
  Title,
  Subtitle,
  EnvironmentList,
  PlantsContainer,
  PlantList
} from './styles'

export interface Environment {
  key: string
  title: string
}

export interface Plant {
  id: number
  name: string
  about: string
  water_tips: string
  photo: string
  environments: [string]
  frequency: {
    times: number
    repeat_every: string
  }
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<Environment[]>([])
  const [plants, setPlants] = useState<Plant[]>([])
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState('all')

  useEffect(() => {
    async function fetchEviroments() {
      const { data } = await api.get('plants_environments', {
        params: {
          _sort: 'title',
          _order: 'asc'
        }
      })
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEviroments()
  }, [])

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants', {
        params: {
          _sort: 'name',
          _order: 'asc'
        }
      })
      setPlants(data)
    }

    fetchPlants()
  }, [])

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment)

    if(environment === 'all') {
      return setFilteredPlants(plants)
    }

    const filtered = plants.filter(plant => plant.environments.includes(environment))

    setFilteredPlants(filtered)
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Title>
          Em qual ambiente
        </Title>
        <Subtitle>
          você quer colocar sua planta?
        </Subtitle>
      </HeaderContainer>

      <View>
        <EnvironmentList
          data={environments}
          keyExtractor={environment => environment.key}
          renderItem={({ item: environment }) => (
            <EnvironmentButton
              active={environment.key === environmentSelected}
              title={environment.title}
              onPress={() => handleEnvironmentSelected(environment.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <PlantsContainer>
        <PlantList
          data={environmentSelected === 'all' ? plants : filteredPlants}
          keyExtractor={plant => String(plant.id)}
          renderItem={({ item: plant}) => (
            <PlantCardPrimary data={plant} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </PlantsContainer>
    </Container>
  )
}