import { Input, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import styles from '../components-styling/page-input-styles-api.module.css'
import capture from './input-props-capture.module.css'

export function InputStylesApiCapture() {
  const scale = new URLSearchParams(window.location.search).get('scale') === '3' ? 3 : 1

  return (
    <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }} forceColorScheme="light">
      <main
        className={capture.capture}
        style={{
          width: 400,
          height: 170,
          padding: 0,
          margin: scale === 1 ? '64px auto' : 0,
          zoom: scale,
        }}
      >
        <Input.Wrapper
          label="Email"
          description="Введите email"
          classNames={{ root: styles.root, label: styles.label }}
          styles={{ description: { color: '#868e96' } }}
        >
          <Input
            placeholder="name@company.ru"
            vars={() => ({ wrapper: { '--input-height': '60px' } })}
          />
        </Input.Wrapper>
      </main>
    </MantineProvider>
  )
}
