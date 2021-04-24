import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

interface EnviromentButtonProps extends RectButtonProps {
  title: string
  active?: boolean
}

import { Container, Title } from './styles'

export function EnviromentButton({ title, active = false, ...rest}: EnviromentButtonProps) {
  return (
    <Container {...rest} isActive={active}>
      <Title isActive={active}>{title}</Title>
    </Container>
  )
}