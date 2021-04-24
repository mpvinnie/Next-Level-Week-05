import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { Button } from '../../components/Button'

import {
  Container,
  Content,
  Emoji,
  Title,
  Subtitle,
  Footer
} from './styles'

export function Confirmation() {
  const { navigate } = useNavigation()

  function handleMoveOn() {
    navigate('PlantSelect')
  }

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button onPress={handleMoveOn}>
            Começar
          </Button>
        </Footer>
      </Content>
    </Container>
  )
}