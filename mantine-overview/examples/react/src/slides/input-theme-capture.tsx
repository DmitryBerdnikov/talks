import { createTheme, Input, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Icon } from './customization-showcase/icon'
import styles from './input-theme-capture.module.css'

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
        radius: 'xl',
      },
      classNames: { wrapper: styles.wrapper },
      styles: {
        input: {
          fontWeight: 500,
        },
      },
      vars: () => ({
        wrapper: {
          '--input-height': '56px',
          '--input-fz': '18px',
        },
      }),
    }),
  },
})

export function InputThemeCapture() {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <main className={styles.capture}>
        <Input.Wrapper label="Email">
          <Input placeholder="Введите email" rightSection={<Icon name="mail" />} />
        </Input.Wrapper>
        <Input.Wrapper label="Email">
          <Input defaultValue="name@company.ru" autoFocus rightSection={<Icon name="mail" />} />
        </Input.Wrapper>
        <Input.Wrapper label="Email" error="Некорректный email">
          <Input placeholder="Введите email" error rightSection={<Icon name="mail" />} />
        </Input.Wrapper>
      </main>
    </MantineProvider>
  )
}
