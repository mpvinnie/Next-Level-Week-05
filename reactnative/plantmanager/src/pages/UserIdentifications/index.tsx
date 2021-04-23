import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../components/Button'

import {
  Container,
  KeyboardAvoidingView,
  Content,
  Form,
  FormHeader,
  Emoji,
  Title,
  Input,
  Footer
} from './styles'

export function UserIdentification() {
  const { navigate } = useNavigation()
  
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }


  function handleSubmit() {
    navigate('Confirmation')
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <FormHeader>
                <Emoji>
                  { isFilled ? '😄' : '😀'}
                </Emoji>

                <Title>
                  Como podemos {'\n'}
                  chamar você
                </Title>
              </FormHeader>

              <Input
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                isFocused={isFocused}
                onChangeText={handleInputChange}
                isFilled={isFilled}
                />

              <Footer>
                <Button
                  onPress={handleSubmit}
                  >
                  Confirmar
                </Button>
              </Footer>
            </Form>
          </Content>
          </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  )
}