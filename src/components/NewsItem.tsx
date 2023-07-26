import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getDate } from '../utils/getDate'

interface NewsItemProps {
  title: string
  points?: number | null
  user?: string | null
  time: number
  domain?: string
  id: number
  newsNumber: number
}

export default function NewsItem({title, points, user, time, domain, id, newsNumber}: NewsItemProps) {
  return (
   <ItemContainer>
      <NewsNumber>{newsNumber}.</NewsNumber>
      <NewsLink to={`/${id}`}>
        <Title>{title}</Title>
        <ItemInfo>
          {domain 
            ? <Address>{domain}<Dot>•</Dot></Address>
            : null
          }
          {points} points<Dot>•</Dot>{user}<Dot>•</Dot>{getDate(time)}
        </ItemInfo>
      </NewsLink>
   </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`
const Title = styled.h3`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 5px;
`

const ItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: rgb(36,41,47);
  font-size: 12px;
`

const Address = styled.span`
  color: rgb(255,102,0);
`

const Dot = styled.span`
  color: rgb(36,41,47);
  opacity: 0.2;
  margin-right: 5px;
  margin-left: 5px;
`

const NewsNumber = styled.span`
  margin-right: 12px;
  color: rgb(36,41,47);
  opacity: 0.5;
  font-size: 14px;
`

const NewsLink = styled(Link)`
	color: inherit;
	text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`