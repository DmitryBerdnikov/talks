import { useState } from 'react'
import '@mantine/core/styles.css'
import {
  AppShell,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Box,
  Grid,
  Group,
  MantineProvider,
  MultiSelect,
  NavLink,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import styles from './layout-showcase.module.css'

const sections = ['Inputs', 'Buttons', 'Data display'] as const

function AppShellExample() {
  const [active, setActive] = useState<(typeof sections)[number]>('Inputs')
  const [checked, setChecked] = useState(true)
  const [copied, setCopied] = useState(false)

  return (
    <AppShell
      mode="static"
      h={400}
      header={{ height: 60 }}
      navbar={{ width: 150, breakpoint: 0 }}
      padding="lg"
      className={styles.shell}
    >
      <AppShell.Header px="lg">
        <Group h="100%" justify="space-between">
          <Text fw={750} c="blue.7" size="lg">
            Mantine
          </Text>
          <Avatar color="blue" size={30} radius="xl">
            DB
          </Avatar>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="xs" bg="gray.0">
        <Stack gap={6}>
          {sections.map((section) => (
            <NavLink
              component="button"
              type="button"
              key={section}
              label={section}
              active={active === section}
              onClick={() => setActive(section)}
              className={styles.navLink}
            />
          ))}
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Title order={3} mb="lg">
          {active}
        </Title>
        {active === 'Inputs' && (
          <Stack gap="md">
            <TextInput label="Email" placeholder="Введите email" />
            <MultiSelect
              label="MultiSelect"
              data={['React', 'TypeScript', 'CSS']}
              defaultValue={['React', 'TypeScript']}
            />
            <Checkbox
              label="Checkbox"
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
            />
          </Stack>
        )}
        {active === 'Buttons' && (
          <Stack align="start" gap="lg">
            <Group gap="xs">
              <Button>Сохранить</Button>
              <Button variant="outline">Отмена</Button>
            </Group>
            <Button
              variant="light"
              onClick={async () => {
                await navigator.clipboard.writeText('hello@fuse8.com')
                setCopied(true)
              }}
            >
              {copied ? 'Скопировано' : 'Скопировать email'}
            </Button>
          </Stack>
        )}
        {active === 'Data display' && (
          <Stack gap="lg">
            <Group>
              <Avatar color="blue" radius="xl">
                DB
              </Avatar>
              <div>
                <Text fw={600}>Дмитрий Бердников</Text>
                <Text size="sm" c="dimmed">
                  Frontend developer
                </Text>
              </div>
            </Group>
            <Badge color="green" variant="light">
              Активен
            </Badge>
            <Text>Разрабатывает интерфейсы.</Text>
          </Stack>
        )}
      </AppShell.Main>
    </AppShell>
  )
}

function GridExample() {
  return (
    <div className={styles.gridExample}>
      <Grid gap={12}>
        {[12, 8, 4, 4, 4, 4, 3, 6, 3].map((span, index) => (
          <Grid.Col key={index} span={{ base: 12, xs: span }}>
            <Box bg={index % 2 ? 'blue.2' : 'blue.1'} className={styles.gridCell} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}

export function LayoutShowcase() {
  const capture = new URLSearchParams(window.location.search).get('capture')
  if (capture === 'app-shell' || capture === 'grid') {
    return (
      <MantineProvider forceColorScheme="light" theme={{ fontFamily: 'Inter, sans-serif' }}>
        <main className={styles.capture}>
          {capture === 'app-shell' ? <AppShellExample /> : <GridExample />}
        </main>
      </MantineProvider>
    )
  }
  return (
    <MantineProvider forceColorScheme="light" theme={{ fontFamily: 'Inter, sans-serif' }}>
      <main className={styles.showcase}>
        <section>
          <Title order={3}>AppShell</Title>
          <div data-layout-example="app-shell">
            <AppShellExample />
          </div>
        </section>
        <section>
          <Title order={3}>Grid</Title>
          <div data-layout-example="grid">
            <GridExample />
          </div>
        </section>
      </main>
    </MantineProvider>
  )
}
