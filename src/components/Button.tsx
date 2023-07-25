import { ReactNode } from 'react'
import { styled } from 'styled-components'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <Container onClick={props.onClick}> 
      {props.children}
    </Container>
   )
}

const Container = styled.button`
  width: 42px;
  height: 42px;
  position: relative;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ececec;
  }

  svg {
    position: absolute; 
		top: 50%; 
		left: 50%; 
		transform: translate(-50%,-50%); 
  }
`