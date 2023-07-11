
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#9F7AEA',
    secondary: '#323238',
    textPrimary: '#718096',
    textSecondary: '#E9D8FD',
    success: '#015f43',
    danger: '#763b44',
    black: '#121214'
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
        body: {
            bg: 'gray.800',
            color: 'textPrimary',
            width: '100%',
            maxWidth: '1120px',
            margin: '0 auto',
        },
    },
  }
})