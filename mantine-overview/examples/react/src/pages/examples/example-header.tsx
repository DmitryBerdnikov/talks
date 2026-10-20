import { Link, useLocation } from 'react-router-dom'
import { Button, Group, Text, ThemeIcon } from '@mantine/core'

const examples = [
  { path: '/examples/users', label: 'Админка' },
  { path: '/examples/feedback', label: 'Обратная связь' },
  { path: '/examples/product', label: 'Промо' },
]

export function ExampleHeader({ compact = false }: { compact?: boolean }) {
  const { pathname } = useLocation()
  return (
    <Group h="100%" px="lg" justify="space-between">
      <Group gap="sm">
        <ThemeIcon size="lg">M</ThemeIcon>
        <Text fw={700}>Mantine</Text>
      </Group>
      <Group gap="xs" visibleFrom={compact ? 'sm' : undefined}>
        {examples.map((example) => (
          <Button
            key={example.path}
            component={Link}
            to={example.path}
            variant={pathname === example.path ? 'light' : 'subtle'}
            size="xs"
          >
            {example.label}
          </Button>
        ))}
      </Group>
    </Group>
  )
}
