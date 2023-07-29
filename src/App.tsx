import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'
import AppRouter from './components/AppRouter'
import Theme from './styles/Theme'

function App() {
  return (
    <BrowserRouter basename='/hacker-news/'>
      <Theme>
        <GlobalStyles/>
        <Header/>
        <Container>
          <AppRouter/>
        </Container>
      </Theme>
    </BrowserRouter>
  )
}

export default App

const Container = styled.div`
  max-width: 1060px;
	padding: 0 30px;
  margin: 0 auto;
`