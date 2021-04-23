import React from 'react'
import { Button } from '../../components/Button'
import {
  Container,
  Content,
  Emoji,
  Title,
  Subtitle,
  Footer
} from './styles'

export function Confirmation() {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Subtitle>

        <Footer>
          <Button title="Confirmar" />
        </Footer>
      </Content>
    </Container>
  )
}