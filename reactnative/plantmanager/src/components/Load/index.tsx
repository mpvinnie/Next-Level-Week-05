import React from 'react'

import { Container, LottieView } from './styles'

import loadAnimation from '../../assets/load.json'

export function Load() {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
      />
    </Container>
  )
}