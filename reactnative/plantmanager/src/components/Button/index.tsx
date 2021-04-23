import React, { ButtonHTMLAttributes } from 'react'
import { Container, TextButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container>
      <TextButton>
        {title}
      </TextButton>
    </Container>
  )
}