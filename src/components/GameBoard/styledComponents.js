import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #223a5f;
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  margin-top: 50px;
  // border:1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  width: 90%;
`
export const HeaderContainerText = styled.div``
export const HeaderText = styled.h1`
  font-family: ${props => (props.score ? 'Roboto' : 'Bree Serif')};
  font-size: 16px;
  font-weight: bold;
  width: 80px;
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
`

export const ScoreBoardContainer = styled.div`
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  width: 80px;
  border-radius: 7px;
`
export const ChoiceContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-top: 70px;
  // border:1px solid red;
  width: 380px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ResultViewContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.all ? 'row' : 'column')};
  align-items: center;
`

export const OpponentImageContainer = styled.div`
  width: 160px;
  text-align: center;
`

export const UserImageContainer = styled.div`
  width: 160px;
  text-align: center;
  margin-right: 30px;
`

export const ResultImageElement = styled.img`
  width: 100%;
`

export const PlayAgainButton = styled.button``
