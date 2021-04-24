import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { EnvironmentButton } from '../../components/EnvironmentButton'
import { Header } from '../../components/Header'
import { api } from '../../services/api'

import { Container, HeaderContainer, Title, Subtitle, EnvironmentList } from './styles'

export interface Environment {
  key: string
  title: string
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<Environment[]>([])

  useEffect(() => {
    async function fetchEviroment() {
      const { data } = await api.get('plants_environments')
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ])
    }

    fetchEviroment()
  }, [])

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
            <EnvironmentButton title={environment.title} onPress={() => {}} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </Container>
  )
}