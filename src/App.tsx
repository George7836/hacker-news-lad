import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NewsPage from './pages/NewsPage'
import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from './types/hooks'
import { getAllNews, userSelector } from './store/newsSlice'
import { INews } from './types/news'

const Container = styled.div`
  max-width: 660px;
	padding: 0 30px;
  margin: 0 auto;
`

function App() {
  return (
    <HashRouter basename='/'>
      <GlobalStyles/>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/:id' element={<NewsPage/>}/>
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App