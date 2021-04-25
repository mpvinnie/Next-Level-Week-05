import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes'
import * as Notifications from 'expo-notifications'
import { Plant } from './src/libs/storage'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        notification.request.content.data.plant as Plant
      }
    )

    return () => subscription.remove()
  })

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  )
}