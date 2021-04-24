import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

interface ContainerProps {
  isActive?: boolean
}

interface TitleProps {
  isActive?: boolean
}

export const Container = styled(RectButton)<ContainerProps>`
  background: ${colors.shape};
  width: 76px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 4px;

  ${props => props.isActive && css`
    background: ${colors.green_light};
  `}
`

export const Title = styled.Text<TitleProps>`
  color: ${colors.heading};
  font-family: ${fonts.text};

  ${props => props.isActive && css`
    color: ${colors.green_dark};
    font-family: ${fonts.heading};
  `}
`