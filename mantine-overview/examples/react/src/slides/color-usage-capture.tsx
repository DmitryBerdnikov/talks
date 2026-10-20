import { Button, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import styles from './color-usage-capture.module.css'

export function ColorUsageCapture() {
  const capture = new URLSearchParams(window.location.search).get('capture')
  return (
    <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }} forceColorScheme="light">
      <main className={capture ? styles.capture : styles.gallery}>
        {capture !== 'css' && (
          <Button color="indigo.6" size="lg">
            Сохранить
          </Button>
        )}
        {capture !== 'component' && (
          <Button className={styles.button} size="lg">
            Сохранить
          </Button>
        )}
      </main>
    </MantineProvider>
  )
}
