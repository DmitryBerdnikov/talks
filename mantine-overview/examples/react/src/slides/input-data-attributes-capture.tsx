import { Input, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Icon } from './customization-showcase/icon'
import styles from './input-data-attributes-capture.module.css'

export function InputDataAttributesCapture() {
  return (
    <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }} forceColorScheme="light">
      <main className={styles.capture}>
        <Input.Wrapper label="Email">
          <Input
            placeholder="Введите email"
            classNames={{ input: styles.input }}
            variant="filled"
            size="lg"
            rightSection={<Icon name="mail" />}
            error
          />
        </Input.Wrapper>
      </main>
    </MantineProvider>
  )
}
