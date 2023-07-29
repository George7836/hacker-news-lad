import Theme from '../styles/Theme'
import Header from './Header'
import GlobalStyles from '../styles/GlobalStyles'
import { Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Layout() {
  return (
    <Theme>
      <GlobalStyles/>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
    </Theme>
  )
}

const Container = styled.div`
  max-width: 1060px;
	padding: 0 30px;
  margin: 0 auto;
`