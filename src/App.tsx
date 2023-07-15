import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App