import styled, { css } from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface InputProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
`

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`

export const FormHeader = styled.View`
  align-items: center;
`

export const Emoji = styled.Text`
  font-size: 44px;
`

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 20px;
`

export const Input = styled.TextInput<InputProps>`
  font-family: ${fonts.text};
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: 100%; 
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  ${props => (props.isFocused || props.isFilled) && css`
    border-color: ${colors.green};
  `}
`

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`