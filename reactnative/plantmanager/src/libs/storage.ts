import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'

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
  },
  dateTimeNotification: Date
  hour: string
}

interface StoragePlantProps {
  [id: string]: {
    data: Plant
  }
}

export async function savePlant(plant: Plant): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@PlantManager:plants')
    const oldPlants = data ? JSON.parse(data) as StoragePlantProps : {}

    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }

    await AsyncStorage.setItem('@PlantManager:plants', JSON.stringify({ ...newPlant, ...oldPlants}))

  } catch (err) {
    throw new Error(err)
  }
}

export async function loadPlant(): Promise<Plant[]> {
  try {
    const data = await AsyncStorage.getItem('@PlantManager:plants')
    const plants = data ? JSON.parse(data) as StoragePlantProps : {}

    console.log(plants)

    const plantsSorted = Object.keys(plants).map(plant => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
      }
    }).sort(( a, b) =>
      Math.floor(new Date(a.dateTimeNotification).getTime() / 100 - Math.floor(new Date(b.dateTimeNotification).getTime() / 100))
    )

    return plantsSorted

  } catch (err) {
    throw new Error(err)
  }
}