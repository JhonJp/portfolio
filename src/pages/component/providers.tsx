
'use client'

import { ThemeProvider } from 'next-themes'

export function Providers(props?: any) {
  return(
    <ThemeProvider>
      {props.children}
    </ThemeProvider>
  )
}