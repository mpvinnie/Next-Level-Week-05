import styled from 'styled-components/native'
import colors from '../../styles/colors'
import { Dimensions } from 'react-native'
import fonts from '../../styles/fonts'

const imageHeight = Dimensions.get('window').width * 0.7

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`

export const WateringImage = styled.Image`
  height: ${imageHeight}px;
`

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`

export const NextButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 56px;
  height: 56px;
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
`