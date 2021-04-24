import styled from 'styled-components/native'
import colors from '../../styles/colors'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'
import fonts from '../../styles/fonts'

const barHeight = Platform.OS === 'ios' ? getStatusBarHeight() : 0

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top: ${barHeight}px;
`

export const Greering = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`

export const NameText = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`

export const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`