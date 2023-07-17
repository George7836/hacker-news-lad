import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`
const Title = styled.h3`
  font-size: 14px;
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
  opacity: 0.2;
  margin-right: 5px;
  margin-left: 5px;
`

export default function NewsItem() {
  return (
    <ItemContainer>
      <Title>A PostgreSQL Docker container that automatically upgrades PostgreSQL</Title>
      <ItemInfo>
        <Address>github.com/justinclif</Address><Dot>•</Dot>31 points<Dot>•</Dot>justinclift<Dot>•</Dot>дата
      </ItemInfo>
    </ItemContainer>
  )
}
