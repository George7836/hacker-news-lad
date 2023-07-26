import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import NewsPage from "../pages/NewsPage";
import NotFound from "./NotFound";

export default function AppRouter() {
  return (
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/:id' element={<NewsPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}
