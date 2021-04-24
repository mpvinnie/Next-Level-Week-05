import styled from 'styled-components/native'
import Lottie from 'lottie-react-native'


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LottieView = styled(Lottie)`
  background: transparent;
  width: 200px;
  height: 200px;
`