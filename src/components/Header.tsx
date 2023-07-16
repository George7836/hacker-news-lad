import styled from 'styled-components'
import { ReactComponent as ReloadIcon } from './../assets/icons/reload.svg'
import { ReactComponent as HackerNewsIcon } from './../assets/icons/hv.svg'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  box-shadow: 0px 1px 0px rgba(1,26,48, 0.05);
  margin-bottom: 40px;
`
const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  & h1 {
    margin-left: 10px;
    font-size: inherit;
  }
`
const ReloadBtn = styled.button`
  width: 42px;
  height: 42px;
  position: relative;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    position: absolute; 
		top: 50%; 
		left: 50%; 
		transform: translate(-50%,-50%); 
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <HackerNewsIcon/>
        <h1>Hacker News</h1>
      </Logo>
      <ReloadBtn>
        <ReloadIcon/>
      </ReloadBtn>
    </HeaderContainer>
  )
}