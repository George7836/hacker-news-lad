import { theme } from '../styles/theme'
import Header from './Header'
import GlobalStyles from '../styles/GlobalStyles'
import { Outlet } from 'react-router-dom'
import { ThemeProvider, styled } from 'styled-components'

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Container>
        <Outlet/>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  max-width: 1060px;
	padding: 0 30px;
  margin: 0 auto;
`