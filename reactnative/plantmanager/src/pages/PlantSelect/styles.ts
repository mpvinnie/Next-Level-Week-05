import styled from 'styled-components/native'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export const HeaderContainer = styled.View`
  padding: 0 32px;
`

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`

export const  Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  color: ${colors.heading};
`

export const EnviromentList = styled.FlatList.attrs({
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    paddingHorizontal: 32,
    marginVertical: 30
  }
})``