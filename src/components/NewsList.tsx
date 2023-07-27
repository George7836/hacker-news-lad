import { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useAppDispatch, useAppSelector } from '../types/hooks'
import { getAllNews, userSelector } from '../store/slices/newsSlice'
import { News } from '../types/news'
import { Preloader } from '../styles/Preloader'
import { ReactComponent as Spinner } from '../assets/icons/spinner.svg'

export default function NewsList() {
  const news = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllNews())
    const interval = setInterval(() => {
      dispatch(getAllNews())
    }, 60000)
    return () => clearInterval(interval)
  }, [news.updated])

  return (
   <>
    {news.loading === false
      ? news.news.map((el: News) => (
        <NewsItem
          key={el.id}
          id={el.id}
          title={el.title}
          points={el.points}
          user={el.user}
          time={el.time}
          domain={el.domain}
          newsNumber={news.news.indexOf(el) + 1}
        />
      ))
      : 
      <Preloader>
        <Spinner/>
      </Preloader>}
   </>
  )
}