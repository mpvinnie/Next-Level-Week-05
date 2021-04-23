import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, TextButton } from './styles'

interface ButtonProps extends RectButtonProps {
  children: string
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <TextButton>
        {children}
      </TextButton>
    </Container>
  )
}