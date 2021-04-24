import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

interface EnvironmentButtonProps extends RectButtonProps {
  title: string
  active?: boolean
}

import { Container, Title } from './styles'

export function EnvironmentButton({ title, active = false, ...rest}: EnvironmentButtonProps) {
  return (
    <Container {...rest} isActive={active}>
      <Title isActive={active}>{title}</Title>
    </Container>
  )
}