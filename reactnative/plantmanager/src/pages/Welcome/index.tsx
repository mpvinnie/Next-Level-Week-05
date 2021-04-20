import React from 'react'

import wateringImg from '../../assets/watering.png'

import { Container, Title, WateringImage, Subtitle, NextButton, NextButtonText } from './styles'

export function Welcome() {
  return (
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Title>

      <WateringImage source={wateringImg} />

      <Subtitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Subtitle>

      <NextButton>
        <NextButtonText>
          >
        </NextButtonText>
      </NextButton>
    </Container>
  )
}