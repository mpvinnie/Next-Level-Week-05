import React from 'react'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'
// import { Welcome } from './src/pages/Welcome'
import { UserIdentification } from './src/pages/UserIdentifications'

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
      <UserIdentification />
    </>
  )
}