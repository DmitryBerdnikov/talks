import { Box, Input, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import styles from './input-props-capture.module.css'
import inputStyles from '../components-styling/page-input-styles-api.module.css'

export function InputPropsCapture() {
  const params = new URLSearchParams(window.location.search)
  const filled = params.get('variant') === 'filled'
  const dataAttributes = params.get('demo') === 'data-attributes'
  const styleProps = params.get('demo') === 'style-props'
  const scale = params.get('scale') === '3' ? 3 : 1

  return (
    <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }} forceColorScheme="light">
      <main
        className={styles.capture}
        aria-label="Пример Input"
        style={
          dataAttributes || styleProps
            ? {
                width: 400,
                height: 100,
                padding: styleProps ? 20 : 0,
                zoom: scale,
              }
            : undefined
        }
      >
        {styleProps ? (
          <Box
            w={300}
            mx="auto"
            py="lg"
            c="teal.9"
            ta="center"
            bg={{ base: 'blue.0', md: 'teal.0' }}
          >
            Пример
          </Box>
        ) : dataAttributes ? (
          <Input.Wrapper label="Email">
            <Input
              placeholder="Введите email"
              classNames={{ input: inputStyles.input }}
              variant="filled"
              error
            />
          </Input.Wrapper>
        ) : filled ? (
          <Input placeholder="Введите email" variant="filled" radius="xl" size="lg" />
        ) : (
          <Input placeholder="Введите email" />
        )}
      </main>
    </MantineProvider>
  )
}
