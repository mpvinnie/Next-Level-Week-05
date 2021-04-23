import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

import wateringImg from '../../assets/watering.png'

import {
  Container,
  Wrapper,
  Title,
  WateringImage,
  Subtitle,
  NextButton,
} from './styles'
import colors from '../../styles/colors'

export function Welcome() {
  const { navigate } = useNavigation()

  function handleStart() {
    navigate('UserIdentification')
  }

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Title>

        <WateringImage
          source={wateringImg}
          resizeMode="contain"
          />

        <Subtitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Subtitle>

        <NextButton
          onPress={handleStart}
        >
            <Feather
              name="chevron-right"
              size={32}
              color={colors.white}
              />
        </NextButton>
      </Wrapper>
    </Container>
  )
}