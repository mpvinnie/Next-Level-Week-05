import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import waterdrop from '../../assets/waterdrop.png'

import { Header } from '../../components/Header'
import { Load } from '../../components/Load'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'

import { loadPlant, Plant, removePlant } from '../../libs/storage'

import {
  Container,
  HeaderContainer,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  Plants,
  PlantsTitle
} from './styles'

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<Plant[]>([])
  const [loading, setLoading] = useState(true)
  const [nextWaterd, setNextWaterd] = useState<string>()

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWaterd(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}.`)

      setMyPlants(plantsStoraged)

      setLoading(false)
    }

    loadStorageData()
  }, [])
  
  function handleRemove(plant: Plant) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
      {
        text: 'Não 🙏🏻',
        style: 'cancel'
      },
      {
        text: 'Sim 😢',
        onPress: async () => {
          try {
            await removePlant(plant.id)

            setMyPlants(state => state.filter(currentPlant => currentPlant.id !== plant.id))
          } catch (err) {
            Alert.alert('Não foi possível remover! 😢')
          }
        }
      }
    ])
  }

  if(loading) {
    return <Load />
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Spotlight>
          <SpotlightImage source={waterdrop} />
          <SpotlightText>{nextWaterd}</SpotlightText>
        </Spotlight>
      </HeaderContainer>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={plant => String(plant.id)}
          renderItem={({ item: plant }) => (
            <PlantCardSecondary data={plant} handleRemove={() => handleRemove(plant)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 8,
            paddingBottom: 24,
          }}
        />
      </Plants>
    </Container>
  )
}