
import { ReactNode } from 'react'
import { styled } from 'styled-components'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
  return (
    <Container {...props}> 
      {children}
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