import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Animated from 'react-native-reanimated'
import { SvgFromUri } from 'react-native-svg'
import colors from '../../styles/colors'

import { Container, Title, DetailsContainer, Time, TimeLabel, ButtonRemove } from './styles'

interface PlantCardSecondaryProps extends RectButtonProps {
  data: {
    name: string
    photo: string
    hour: string
  }
  handleRemove: () => void
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantCardSecondaryProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  )
}