import 'react-native-gesture-handler'
import React from 'react'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Routes />
    </>
  )
}