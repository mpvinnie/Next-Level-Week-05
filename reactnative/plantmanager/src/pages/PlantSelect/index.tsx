import React from 'react'
import { Header } from '../../components/Header'

import { Container, Title, Subtitle, } from './styles'

export function PlantSelect() {
  return (
    <Container>
      <Header />

      <Title>
        Em qual ambiente
      </Title>
      <Subtitle>
        você quer colocar sua planta?
      </Subtitle>

    </Container>
  )
}