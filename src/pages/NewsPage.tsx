import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { getDate } from "../utils/getDate"
import { Preloader } from "../styles/Preloader"
import { ReactComponent as Spinner } from '../assets/icons/spinner.svg'
import Comment from '../components/Comment'
import { useAppDispatch, useAppSelector } from "../types/hooks"
import { changePage } from "../store/slices/pageSlice"
import { getSingleNews, saveId, userSingleNewsSelector } from "../store/slices/singleNewsSlice"

export default function NewsPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const item = useAppSelector(userSingleNewsSelector)

  useEffect(() => {
    dispatch(getSingleNews(id!))
    const interval = setInterval(() => {
      dispatch(getSingleNews(id!))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    dispatch(changePage('single'))
    dispatch(saveId(id))
  }, [])

  return (
    <NewsPageContainer>
      {item.loading === false
        ?  
        <>
          <Card>
            <Title>{item.oneNews?.title}</Title>
            <NewsLink href={item.oneNews?.url} target="_blank">{item.oneNews?.domain}</NewsLink>
            <Row>{getDate(item.oneNews?.time)}</Row>
            <Author>author: <span>{item.oneNews?.user}</span></Author>
          </Card>
          <Comments>comments: {item.oneNews?.comments_count}</Comments>
          {item.oneNews?.comments 
            ? item.oneNews.comments.map((el) => (
              <Comment 
                key={el.id}
                user={el.user!} 
                timeAgo={el.time_ago} 
                content={el.content} 
                comments={el.comments}
              />
            ))
            : null
          }
        </>
        : 
        <Preloader>
          <Spinner/>
        </Preloader>}
    </NewsPageContainer>
  )
}

const NewsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(36,41,47, 0.1);
`

const Title = styled.h3`
  font-size: 33px;
  font-weight: 700;
  margin-bottom: 10px;
`

const NewsLink = styled.a`
  color: rgb(255,102,0);
  margin-bottom: 25px;
  text-decoration: none;
`

const Row = styled.div`
  margin-bottom: 5px;
`

const Author = styled(Row)`
  margin-bottom: 5px;

  span {
    font-weight: 600;
  }
`

const Comments = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
`