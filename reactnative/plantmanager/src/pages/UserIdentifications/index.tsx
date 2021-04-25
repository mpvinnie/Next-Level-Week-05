import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native'
import { Button } from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'

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


  async function handleSubmit() {
    if(!name) {
      return Alert.alert('Me diz como chamar você 😥')
    }

    try {
      await AsyncStorage.setItem('@PlantManager:user', name)
      navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect'
      })
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😥')
    }

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