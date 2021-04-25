import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled(RectButton)`
  height: 90px;
  padding: 20px 10px;
  border-radius: 20px;
  background: ${colors.shape};
  margin: 5px 32px;
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  flex: 1;
  margin-left: 24px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`

export const DetailsContainer = styled.View`
  align-items: flex-end;
`

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 90px;
  background: ${colors.red};
  margin-top: 5px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  right: 32px;
`