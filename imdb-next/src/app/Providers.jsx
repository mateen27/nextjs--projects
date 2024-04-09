// for interaction with website we need to make the component for the Client side
'use client'

// importing Themes from the next-themes
import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        {children}
    </ThemeProvider>
  )
}

export default Providers