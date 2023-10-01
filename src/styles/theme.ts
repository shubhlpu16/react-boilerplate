import { theme as ChakraTheme, extendTheme, type Theme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme: Partial<Theme> = extendTheme({
  ...ChakraTheme,
  breakpoints: {
    sm: '375px',
    md: '640px',
    lg: '768px',
    xl: '1024px',
    '2xl': '1280px'
  },
  colors,
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'brown.400'
      }
    }
  }
})
