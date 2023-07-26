import { ReactNode } from 'react'
import { styled } from 'styled-components'

interface ButtonProps {
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
    text-align: center;
    vertical-align: middle;
  }
`