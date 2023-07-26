import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";
import NotFound from "./NotFound";

export default function AppRouter() {
  return (
      <Routes>
        <Route path='/hacker-news/' element={<MainPage/>}/>
        <Route path='/hacker-news/:id' element={<NewsPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}
