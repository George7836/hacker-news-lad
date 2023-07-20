import { useEffect } from 'react'
import NewsItem from './NewsItem'
import { useAppDispatch, useAppSelector } from '../types/hooks'
import { getAllNews, userSelector } from '../store/newsSlice'
import { INews } from '../types/news'

export default function NewsList() {
  const news = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllNews())
    const interval = setInterval(() => {
      dispatch(getAllNews())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
   <>
    {news.news.length > 0
      ? news.news.map((el: INews) => (
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
      : null}
   </>
  )
}
