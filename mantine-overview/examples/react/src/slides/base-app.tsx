import '@mantine/core/styles.css'
import { Button, Center, createTheme, MantineProvider, rem } from '@mantine/core'
import { ExampleDesign } from '../example-design'
import '../styles.css'

const theme = createTheme({
  components: {
    Button: Button.extend({
      // defaultProps: {
      // 	variant: 'outline',
      // 	size: 'lg'
      // },
    }),
  },
})

export function App() {
  return (
    <MantineProvider theme={theme}>
      <Center h="100vh">
        <ExampleDesign />
      </Center>
    </MantineProvider>
  )
}
