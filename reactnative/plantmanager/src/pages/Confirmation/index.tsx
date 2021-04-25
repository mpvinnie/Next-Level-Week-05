import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'

import { Button } from '../../components/Button'

import {
  Container,
  Content,
  Emoji,
  Title,
  Subtitle,
  Footer
} from './styles'

interface Params {
  title: string
  subtitle: string
  buttonTitle: string
  icon: 'smile' | 'hug'
  nextScreen: string
}

const emojis = {
  smile: '😄',
  hug: '🤗'
}

export function Confirmation() {
  const { navigate } = useNavigation()
  const routes = useRoute()

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params

  function handleMoveOn() {
    navigate(nextScreen)
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <Subtitle>
          {subtitle}
        </Subtitle>

        <Footer>
          <Button onPress={handleMoveOn}>
            {buttonTitle}
          </Button>
        </Footer>
      </Content>
    </Container>
  )
}