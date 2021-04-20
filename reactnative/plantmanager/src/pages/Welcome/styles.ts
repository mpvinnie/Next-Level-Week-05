import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`

export const WateringImage = styled.Image`
  width: 292px;
  height: 284px;
`

export const Subtitle = styled.Text`
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

export const NextButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`
