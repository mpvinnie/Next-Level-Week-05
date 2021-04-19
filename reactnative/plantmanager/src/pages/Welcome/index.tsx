import React from 'react'

import wateringImg from '../../assets/watering.png'

import { Container, Title, WateringImage, Message, NextButton, NextButtonText } from './styles'

export function Welcome() {
  return (
    <Container>
      <Title>Gerencie suas plantas de forma fácil</Title>

      <WateringImage source={wateringImg} />

      <Message>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Message>

      <NextButton>
        <NextButtonText>
          >
        </NextButtonText>
      </NextButton>
    </Container>
  )
}