import { Button, createTheme, MantineProvider, Stack } from '@mantine/core'
import '@mantine/core/styles.css'

const theme = createTheme({
  colors: {
    brand: [
      '#f7efff',
      '#e8ddf4',
      '#ccbae2',
      '#b094d0',
      '#9873c1',
      '#885fb8',
      '#8154b4',
      '#6f459f',
      '#633c8f',
      '#56337f',
    ],
  },
  primaryColor: 'brand',
  primaryShade: { light: 5, dark: 7 },
})

export function BrandColorButtons() {
  const capture = new URLSearchParams(window.location.search).get('capture') === '3x'

  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <main style={{ width: 360, padding: 24, background: '#fff', zoom: capture ? 3 : 1 }}>
        <Stack gap="lg" align="center">
          {(['filled', 'light', 'outline'] as const).map((variant) => (
            <Button key={variant} variant={variant} size="xl" w={240} radius="md">
              Mantine
            </Button>
          ))}
        </Stack>
      </main>
    </MantineProvider>
  )
}
