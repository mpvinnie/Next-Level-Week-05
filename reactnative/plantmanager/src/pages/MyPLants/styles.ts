import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  padding: 50px 32px 0px;
  align-items: center;
  justify-content: space-between;
  background: ${colors.background};
`

export const Spotlight = styled.View`
  background: ${colors.blue_light};
  padding: 0 20px;
  border-radius: 20px;
  height: 88px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const  SpotlightImage = styled.Image`
  width: 56px;
  height: 56px;
`

export const  SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  font-size: 15px;
  line-height: 23px;
  font-family: ${fonts.text};
`

export const  Plants = styled.View`
  flex: 1;
  width: 100%;
  /* padding-bottom: 32px; */
`

export const  PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px 0;
`
