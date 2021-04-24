import React from 'react'
import { View } from 'react-native'
import { EnviromentButton } from '../../components/EnviromentButton'
import { Header } from '../../components/Header'

import { Container, HeaderContainer, Title, Subtitle, EnviromentList } from './styles'

export function PlantSelect() {
  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Title>
          Em qual ambiente
        </Title>
        <Subtitle>
          você quer colocar sua planta?
        </Subtitle>
      </HeaderContainer>

      <View>
        <EnviromentList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <EnviromentButton title="Cozinha" active onPress={() => {}} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </Container>
  )
}