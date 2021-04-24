import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import { Container, Greering, NameText, Avatar } from './styles'

export function Header() {
  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function loadStoragedUserName() {
      const user = await AsyncStorage.getItem('@PlantManager:user')
      setUserName(user || '')
    }

    loadStoragedUserName()
  })

  return (
    <Container>
      <View>
        <Greering>Olá,</Greering>
        <NameText>{userName}</NameText>
      </View>

      <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/61069632?v=4' }} />
    </Container>
  )
}