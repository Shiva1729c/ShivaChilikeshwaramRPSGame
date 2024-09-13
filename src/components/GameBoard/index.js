import {Component} from 'react'
import {
  AppContainer,
  HeaderContainerText,
  ResponsiveContainer,
  HeaderContainer,
  HeaderText,
  ScoreBoardContainer,
  ChoiceContainer,
  ResultViewContainer,
  UserImageContainer,
  OpponentImageContainer,
  ResultImageElement,
  PlayAgainButton,
} from './styledComponents'
import ChoiceButtons from '../ChoiceButtons'
import Rules from '../Rules'

const apiConstants = {
  initial: 'INITIAL',
  win: 'WIN',
  draw: 'DRAW',
  lose: 'LOSE',
}

const imageUrlToIdMap = {
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png':
    'ROCK',
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png':
    'SCISSORS',
  'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png':
    'PAPER',
}

class GameBoard extends Component {
  state = {
    UserSelectedImage: '',
    RandomlyGeneratedImage: '',
    apiStatus: apiConstants.initial,
    score: 0,
    gameStarted: false,
  }

  resetGame = () => {
    this.setState({
      UserSelectedImage: '',
      RandomlyGeneratedImage: '',
      apiStatus: apiConstants.initial,
      gameStarted: false,
    })
  }

  getSelectedImages = imageUrl => {
    const {choicesList} = this.props
    const UserSelectedImage = imageUrl
    // user selected image
    const RandomNumber = Math.floor(Math.random() * choicesList.length)
    const RandomlyGeneratedImage = choicesList[RandomNumber].imageUrl
    // randomly generated image
    this.setState(
      {UserSelectedImage, RandomlyGeneratedImage, gameStarted: true},
      this.evaluateGame,
    )
  }

  renderGameWinView = () => {
    const {UserSelectedImage, RandomlyGeneratedImage} = this.state

    return (
      <ResultViewContainer>
        <ResultViewContainer all>
          <UserImageContainer>
            <HeaderText>YOU</HeaderText>
            <ResultImageElement src={UserSelectedImage} alt="your choice" />
          </UserImageContainer>
          <OpponentImageContainer>
            <HeaderText>OPPONENT</HeaderText>
            <ResultImageElement
              src={RandomlyGeneratedImage}
              alt="opponent choice"
            />
          </OpponentImageContainer>
        </ResultViewContainer>
        <HeaderText as="p">YOU WON</HeaderText>
        <PlayAgainButton type="button" onClick={this.resetGame}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultViewContainer>
    )
  }

  renderGameLoseView = () => {
    const {UserSelectedImage, RandomlyGeneratedImage} = this.state

    return (
      <ResultViewContainer>
        <ResultViewContainer all>
          <UserImageContainer>
            <HeaderText>YOU</HeaderText>
            <ResultImageElement src={UserSelectedImage} alt="your choice" />
          </UserImageContainer>
          <OpponentImageContainer>
            <HeaderText>OPPONENT</HeaderText>
            <ResultImageElement
              src={RandomlyGeneratedImage}
              alt="opponent choice"
            />
          </OpponentImageContainer>
        </ResultViewContainer>
        <HeaderText as="p">YOU LOSE</HeaderText>
        <PlayAgainButton type="button" onClick={this.resetGame}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {UserSelectedImage, RandomlyGeneratedImage} = this.state

    return (
      <ResultViewContainer>
        <ResultViewContainer all>
          <UserImageContainer>
            <HeaderText>YOU</HeaderText>
            <ResultImageElement src={UserSelectedImage} alt="your choice" />
          </UserImageContainer>
          <OpponentImageContainer>
            <HeaderText>OPPONENT</HeaderText>
            <ResultImageElement
              src={RandomlyGeneratedImage}
              alt="opponent choice"
            />
          </OpponentImageContainer>
        </ResultViewContainer>
        <HeaderText as="p">IT IS DRAW</HeaderText>
        <PlayAgainButton type="button" onClick={this.resetGame}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultViewContainer>
    )
  }

  renderChoiceButtons = () => {
    const {choicesList} = this.props
    return (
      <ChoiceContainer>
        {choicesList.map(eachChoice => (
          <ChoiceButtons
            choicesDetails={eachChoice}
            key={eachChoice.id}
            getSelectedImages={this.getSelectedImages}
          />
        ))}
      </ChoiceContainer>
    )
  }

  renderHeaderContainer = () => {
    const {score} = this.state

    return (
      <HeaderContainer>
        <HeaderContainerText>
          <HeaderText>Rock Paper Scissors</HeaderText>
        </HeaderContainerText>
        <ScoreBoardContainer>
          <HeaderText as="p" score>
            Score
          </HeaderText>
          <HeaderText as="p" score>
            {score}
          </HeaderText>
        </ScoreBoardContainer>
      </HeaderContainer>
    )
  }

  // Mapping URLs to their respective IDs

  evaluateGame = () => {
    const {UserSelectedImage, RandomlyGeneratedImage} = this.state

    // Get the IDs from the URLs
    const userChoice = imageUrlToIdMap[UserSelectedImage]
    const randomChoice = imageUrlToIdMap[RandomlyGeneratedImage]

    if (userChoice === randomChoice) {
      this.setState({apiStatus: apiConstants.draw})
    } else if (
      (userChoice === 'ROCK' && randomChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && randomChoice === 'PAPER') ||
      (userChoice === 'PAPER' && randomChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        apiStatus: apiConstants.win,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        apiStatus: apiConstants.lose,
      }))
    }
  }

  gameResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.win:
        return this.renderGameWinView()
      case apiConstants.lose:
        return this.renderGameLoseView()
      case apiConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {gameStarted} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          {this.renderHeaderContainer()}
          {!gameStarted && this.renderChoiceButtons()}
          {gameStarted && this.gameResult()}

          <Rules />
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GameBoard
