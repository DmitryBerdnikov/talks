import '@mantine/core/styles.css'
import { Anchor, Container, MantineProvider, Stack, Title } from '@mantine/core'

const groups = [
  [
    'Showcase',
    ['core-showcase', 'layout-showcase', 'extensions-showcase', 'customization-showcase'],
  ],
  [
    'Стилизация компонентов',
    [
      'input-base',
      'input-with-props',
      'input-anatonomy',
      'input-styles-api',
      'input-data-attribute',
      'input-style-props',
    ],
  ],
  ['Возможности Mantine', ['polymorphic', 'custom-component', 'base', 'container', 'grid']],
  ['Формы', ['test-form', 'team-form', 'schema-sync']],
  [
    'Примеры интерфейсов',
    [
      'examples/users',
      'examples/users-custom',
      'examples/feedback',
      'examples/product',
      'examples/card',
      'examples/card-classnames',
      'examples/card-button',
      'examples/card-style-props',
    ],
  ],
] as const

export default function ExamplesIndex() {
  return (
    <MantineProvider forceColorScheme="light">
      <Container size="sm" py="xl">
        <Stack gap="xl">
          <Title>Mantine · Примеры к презентации</Title>
          {groups.map(([title, paths]) => (
            <Stack key={title} gap="xs">
              <Title order={2}>{title}</Title>
              {paths.map((path) => (
                <Anchor key={path} href={'/' + path}>
                  {path}
                </Anchor>
              ))}
            </Stack>
          ))}
        </Stack>
      </Container>
    </MantineProvider>
  )
}
