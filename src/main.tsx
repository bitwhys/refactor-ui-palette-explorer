import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import './assets/genera-font/styles.css'

const theme = extendTheme({
  styles: {
    global: {
      ':root': {
        '--wireframe-viewport-height': '630px',
        '--wireframe-viewport-header-height': '48px',
        '--ui-font': 'Genera Grotesk',
      },
      body: {
        color: 'gray.900',
        fontFamily: 'body',
        backgroundColor: 'white',
        backgroundImage: 'radial-gradient(#55576e 0.6000000000000001px, #fdfdfe 0.6000000000000001px)',
        backgroundSize: '12px 12px',
      },
      'html, body,#root': {
        height: '100%',
      },
    },
    colors: {
      plum: {
        50: '#f0eef6',
        100: '#d2cee0',
        200: '#b4adcc',
        300: '#978bb9',
        400: '#7b6ba8',
        500: '#61518e',
        600: '#4c3f6e',
        700: '#362d4e',
        800: '#201b2f',
        900: '#0b0911',
      },
    },
    fonts: {
      body: "var(--ui-font)',sans-serif",
    },
  },
})

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
