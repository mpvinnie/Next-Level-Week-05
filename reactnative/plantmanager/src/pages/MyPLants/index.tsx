import { formatDistance } from 'date-fns'
import { pt } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import waterdrop from '../../assets/waterdrop.png'

import { Header } from '../../components/Header'
import { PlantCardSecondary } from '../../components/PlantCardSecondary'

import { loadPlant, Plant } from '../../libs/storage'

import {
  Container,
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

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdrop} />

        <SpotlightText>{nextWaterd}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={plant => String(plant.id)}
          renderItem={({ item: plant }) => (
            <PlantCardSecondary data={plant} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 8,
            paddingBottom: 24
          }}
        />
      </Plants>
    </Container>
  )
}