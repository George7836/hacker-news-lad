import React from 'react'
import { styled } from 'styled-components'

type ReloadBtnProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Reload = styled.button`
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

export const ReloadBtn = (props: ReloadBtnProps) => {
  return (
    <Reload onClick={props.onClick}> 
      {props.children}
    </Reload>
   )
}
