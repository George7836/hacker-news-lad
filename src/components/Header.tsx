import styled from 'styled-components'
import { ReactComponent as ReloadIcon } from './../assets/icons/reload.svg'
import { ReactComponent as HackerNewsIcon } from './../assets/icons/hv.svg'
import { ReactComponent as BackIcon } from './../assets/icons/back.svg'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { getAllNews } from '../store/newsSlice'
import { useAppDispatch, useAppSelector } from '../types/hooks'
import { userPageSelector } from '../store/pageSlice'

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

const Buttons = styled.div`
  & > *:not(:last-child) {
    margin-right: 15px;
  }
`

export default function Header() {
  const dispatch = useAppDispatch()
  const page = useAppSelector(userPageSelector)

  return (
    <HeaderContainer>
      <Logo to={'/'}>
        <HackerNewsIcon/>
        <h1>Hacker News</h1>
      </Logo>
      <Buttons>
        {page.page === 'single' &&
          <Link to='/'>
            <Button>
              <BackIcon/>
            </Button>
          </Link>
        }
        <Button onClick={() => dispatch(getAllNews())}>
          <ReloadIcon/>
        </Button>
      </Buttons>
    </HeaderContainer>
  )
}