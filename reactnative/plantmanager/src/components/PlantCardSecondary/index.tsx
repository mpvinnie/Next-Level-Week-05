import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg'

import { Container, Title, DetailsContainer, Time, TimeLabel } from './styles'

interface PlantCardSecondaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantCardSecondaryProps) {
  return (
    <Container {...rest}>
      <SvgFromUri
        uri={data.photo}
        width={50}
        height={50}
      />

      <Title>{data.name}</Title>

      <DetailsContainer>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data.hour}</Time>
      </DetailsContainer>
    </Container>
  )
}