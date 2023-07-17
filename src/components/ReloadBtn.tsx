import React from 'react'
import { styled } from 'styled-components'

type ReloadBtnProps = {
  children: React.ReactNode
}

const Reload = styled.button`
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

export default function ReloadBtn({children}: ReloadBtnProps) {
  return (
    <Reload> 
      {children}
    </Reload>
   )
}
