import { Button, MantineProvider, Tabs } from '@mantine/core'
import '@mantine/core/styles.css'
import './input-props-capture.module.css'

export function UsefulFeaturesCapture() {
  const params = new URLSearchParams(window.location.search)
  const demo = params.get('demo')
  const scale = params.get('scale') === '3' ? 3 : 1

  return (
    <MantineProvider theme={{ fontFamily: 'Inter, sans-serif' }} forceColorScheme="light">
      <main
        style={{
          width: 400,
          height: 140,
          zoom: scale,
          display: 'grid',
          placeItems: 'center',
          background: '#fff',
        }}
      >
        {demo === 'headless' ? (
          <Tabs defaultValue="overview" unstyled>
            <Tabs.List>
              <Tabs.Tab value="overview">Обзор Mantine</Tabs.Tab>
              <Tabs.Tab value="theme">Настройка темы</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        ) : demo === 'button-styled' || demo === 'button-unstyled' ? (
          <Button unstyled={demo === 'button-unstyled'}>Сохранить</Button>
        ) : (
          <Button color="yellow" autoContrast={demo === 'autocontrast'}>
            Mantine
          </Button>
        )}
      </main>
    </MantineProvider>
  )
}
