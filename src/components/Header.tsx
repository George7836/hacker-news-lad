import styled from 'styled-components'
import { ReactComponent as ReloadIcon } from './../assets/icons/reload.svg'
import { ReactComponent as HackerNewsIcon } from './../assets/icons/hv.svg'
import { ReloadBtn } from './ReloadBtn'
import { Link } from 'react-router-dom'
import { getAllNews } from '../store/newsSlice'
import { useAppDispatch } from '../types/hooks'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  box-shadow: 0px 1px 0px rgba(1,26,48, 0.05);
  margin-bottom: 40px;
`
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: inherit;
	text-decoration: none;

  & h1 {
    margin-left: 10px;
    font-size: inherit;
  }
`

export default function Header() {
  const dispatch = useAppDispatch()

  return (
    <HeaderContainer>
      <Logo to={'/'}>
        <HackerNewsIcon/>
        <h1>Hacker News</h1>
      </Logo>
      <ReloadBtn onClick={() => dispatch(getAllNews())}>
        <ReloadIcon/>
      </ReloadBtn>
    </HeaderContainer>
  )
}