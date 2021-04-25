import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'
import * as Notifications from 'expo-notifications'

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

export interface StoragePlantProps {
  [id: string]: {
    data: Plant
    notificationId: string
  }
}

export async function savePlant(plant: Plant): Promise<void> {
  try {
    const nextTime = new Date(plant.dateTimeNotification)
    const now = new Date()

    const { times, repeat_every } = plant.frequency

    if(repeat_every === 'week') {
      const interval = Math.trunc(7 / times)
      nextTime.setDate(now.getDate() + interval)
    } else {
      nextTime.setDate(nextTime.getDate() + 1)
    }

    const seconds = Math.abs(Math.ceil(now.getTime() - nextTime.getTime()) / 1000)

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey, 🌱',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant
        }
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true
      }
    })

    const data = await AsyncStorage.getItem('@PlantManager:plants')
    const oldPlants = data ? JSON.parse(data) as StoragePlantProps : {}

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId
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
    const plants = data ? JSON.parse(data) as StoragePlantProps : {} as StoragePlantProps

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

export async function removePlant(id: number): Promise<void> {
    const data = await AsyncStorage.getItem('@PlantManager:plants')
    const plants = data ? JSON.parse(data) as StoragePlantProps : {}

    await Notifications.cancelScheduledNotificationAsync(plants[id].notificationId)

    delete plants[id]

    await AsyncStorage.setItem('@PlantManager:plants', JSON.stringify(plants))
}