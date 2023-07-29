import { ThemeProvider } from "styled-components"
import { ReactNode } from 'react'

type ThemeProps = {
  children: ReactNode
}

export default function Theme({children}: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

const theme = {
  colors: {
    primary: '#f7f7f7',
    secondary: 'rgb(255,102,0)',
    elements: '#fff',
    font: 'rgb(36,41,47)',
    opacity: 'rgba(36,41,47,0.1)',
    shadow: 'rgba(1,26,48, 0.05)'
  }
}