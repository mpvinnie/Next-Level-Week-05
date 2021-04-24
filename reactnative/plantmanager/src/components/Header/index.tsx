import React from 'react'
import { View } from 'react-native'

import { Container, Greering, NameText, Avatar } from './styles'

export function Header() {
  return (
    <Container>
      <View>
        <Greering>Olá,</Greering>
        <NameText>Vinicius</NameText>
      </View>

      <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/61069632?v=4' }} />
    </Container>
  )
}