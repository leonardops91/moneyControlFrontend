
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#9F7AEA',
    secondary: '#323238',
    textPrimary: '#718096',
    textSecondary: '#E9D8FD',
    textSuccess: '#05a274',
    textDanger: '#f75a68',
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
            h: '100vh',
            bg: 'gray.800',
            color: 'textPrimary',
            _before:{content: '""', bg:'blackAlpha.500', position: 'absolute', h: '212px', w: '100%'},
            border: '1px solid'
        },
    },
  }
})