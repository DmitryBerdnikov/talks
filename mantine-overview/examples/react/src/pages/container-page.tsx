import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Grid,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'

const containerSizes = [
  { value: 'xxs', description: 'кастомный размер темы: 300px' },
  { value: 'xs', description: 'кастомный размер темы: 400px' },
  { value: 'sm', description: 'кастомный размер темы: 500px' },
  { value: 'md', description: 'кастомный размер темы: 600px' },
  { value: 'lg', description: 'кастомный размер темы: 700px' },
  { value: 'xl', description: 'кастомный размер темы: 800px' },
  { value: 'xxl', description: 'кастомный размер темы: 900px' },
  { value: 'xxxl', description: 'кастомный размер темы: 1500px' },
]

function DemoHeading({ title, children }: { title: string; children: string }) {
  return (
    <Stack gap={4}>
      <Title order={2}>{title}</Title>
      <Text c="dimmed">{children}</Text>
    </Stack>
  )
}

function DemoContent({ children }: { children: string }) {
  return (
    <Paper withBorder p="md" radius="sm" bg="blue.0">
      <Text size="sm">{children}</Text>
    </Paper>
  )
}

export function ContainerPage() {
  return (
    <Container size="xxxl" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>Container</Title>
          <Text c="dimmed">
            Витрина пропсов Mantine Container: ограничение ширины, fluid, стратегии центрирования и
            breakout-блоки.
          </Text>
        </Stack>

        <Divider />

        <Stack gap="md">
          <DemoHeading title="Размеры">
            size задаёт max-width. Числа переводятся в rem, а строки могут быть именами размеров из
            темы или CSS-значениями.
          </DemoHeading>
          <Stack gap="sm">
            {containerSizes.map(({ value, description }) => (
              <Box key={value} bg="gray.1" py={4}>
                <Container size={value}>
                  <Group justify="space-between" wrap="nowrap">
                    <Badge variant="light">size="{value}"</Badge>
                    <Text size="sm" ta="right">
                      {description}
                    </Text>
                  </Group>
                </Container>
              </Box>
            ))}
            <Box bg="gray.1" py={4}>
              <Container size={320}>
                <Badge variant="light">size=&#123;320&#125;</Badge>
                <Text size="sm" mt={4}>
                  Числовой размер: 320px, преобразованный в rem.
                </Text>
              </Container>
            </Box>
            <Box bg="gray.1" py={4}>
              <Container size="42rem">
                <Badge variant="light">size="42rem"</Badge>
                <Text size="sm" mt={4}>
                  Произвольное CSS-значение для max-width.
                </Text>
              </Container>
            </Box>
          </Stack>
        </Stack>

        <Stack gap="md">
          <DemoHeading title="Block и fluid">
            Block — обычная стратегия по умолчанию: max-width и автоматическое центрирование. fluid
            отключает max-width и занимает всю ширину родителя.
          </DemoHeading>
          <Stack gap="sm">
            <Box bg="gray.1" py="md">
              <Container strategy="block" size="sm">
                <DemoContent>strategy="block", size="sm"</DemoContent>
              </Container>
            </Box>
            <Box bg="gray.1" py="md">
              <Container fluid size="sm">
                <DemoContent>fluid — size игнорируется</DemoContent>
              </Container>
            </Box>
          </Stack>
        </Stack>

        <Stack gap="md">
          <DemoHeading title={'strategy="grid"'}>
            Grid создаёт три колонки: 1fr, центральная колонка с max-width и 1fr. Обычные прямые
            дети автоматически попадают в центр.
          </DemoHeading>
          <Box bg="gray.1" py="md">
            <Container strategy="block" size="md">
              <DemoContent>
                Обычный прямой ребёнок — центральная колонка grid-контейнера.
              </DemoContent>
              <DemoContent>Второй ребёнок также ограничен центральной колонкой.</DemoContent>
            </Container>

            <Container strategy="grid" size="md">
              <DemoContent>
                Обычный прямой ребёнок — центральная колонка grid-контейнера.
              </DemoContent>
              <DemoContent>Второй ребёнок также ограничен центральной колонкой.</DemoContent>
            </Container>
          </Box>
        </Stack>

        <Stack gap="md">
          <DemoHeading title="Breakout внутри grid">
            Прямой ребёнок с data-breakout занимает все три колонки. Если внутри нужна ограниченная
            ширина, добавьте вложенный Container.
          </DemoHeading>
          <Box bg="gray.1" py="md">
            <Container strategy="grid" size="md">
              <DemoContent>Центральный контент до breakout.</DemoContent>
              <Box data-breakout bg="yellow.2" py="md">
                <Text fw={600} ta="center" size="sm">
                  data-breakout — полная ширина родительского grid
                </Text>
              </Box>
              <Box data-breakout bg="teal.1" py="md">
                <Container data-container size="sm">
                  <DemoContent>
                    Breakout-обёртка полная, вложенный Container снова ограничен.
                  </DemoContent>
                </Container>
              </Box>
              <DemoContent>Центральный контент после breakout.</DemoContent>
            </Container>
          </Box>
        </Stack>

        <Divider />

        <Stack gap="md">
          <DemoHeading title="Flex">
            Низкоуровневый flex-контейнер: можно управлять направлением, переносом, выравниванием и
            распределением свободного места.
          </DemoHeading>
          <Paper withBorder p="md">
            <Flex gap="sm" align="center" justify="space-between" wrap="wrap">
              {['direction', 'wrap', 'align', 'justify'].map((label) => (
                <DemoContent key={label}>{`${label}: настраивается отдельно`}</DemoContent>
              ))}
            </Flex>
          </Paper>
          <Paper withBorder p="md">
            <Text size="sm" mb="sm">
              Responsive props и разные отступы по осям:
            </Text>
            <Flex justify={{ sm: 'center' }} gap="20">
              <DemoContent>base: column</DemoContent>
              <DemoContent>sm: row</DemoContent>
            </Flex>
          </Paper>
        </Stack>

        <Stack gap="md">
          <DemoHeading title="Group">
            Специализированный горизонтальный layout для связанных элементов: кнопок, фильтров,
            вкладок и действий. Group проще, чем Flex, когда нужен ряд с gap и выравниванием.
          </DemoHeading>
          <Paper withBorder p="md">
            <Group gap="xs" justify="space-between" align="center">
              <Badge>Фильтры</Badge>
              <Badge variant="light">По дате</Badge>
              <Badge variant="light">По статусу</Badge>
              <Badge variant="outline">Сбросить</Badge>
            </Group>
          </Paper>
          <Paper withBorder p="md">
            <Text size="sm" mb="sm">
              grow делит доступную ширину между дочерними элементами. Сравнение preventGrowOverflow:
            </Text>
            <Group grow wrap="nowrap" gap="xs">
              <Badge variant="light">true: максимум 33%</Badge>
              <Badge variant="light">
                true: максимум 33% true: максимум 33% true: максимум 33%
              </Badge>
              <Badge variant="light">true: максимум 33%</Badge>
            </Group>
            <Group grow preventGrowOverflow={false} wrap="nowrap" gap="xs" mt="md">
              <Badge variant="outline">false: ширина от контента</Badge>
              <Badge variant="outline">false</Badge>
              <Badge variant="outline">false: ширина от контента</Badge>
            </Group>
          </Paper>
        </Stack>

        <Stack gap="md">
          <DemoHeading title="Stack">
            Специализированный вертикальный layout: элементы идут сверху вниз с одинаковым gap.
            Удобен для форм, карточек и последовательных блоков.
          </DemoHeading>
          <Paper withBorder p="md" maw={480}>
            <Stack gap="sm" align="stretch">
              <DemoContent>Заголовок</DemoContent>
              <DemoContent>Описание</DemoContent>
              <DemoContent>Действия</DemoContent>
            </Stack>
          </Paper>
          <Paper withBorder p="md" h={220} maw={480}>
            <Stack gap="sm" align="center" justify="center" h="100%">
              <DemoContent>align="center"</DemoContent>
              <DemoContent>justify="center"</DemoContent>
            </Stack>
          </Paper>
        </Stack>

        <Divider />

        <Stack gap="md">
          <DemoHeading title="Grid: каркас страницы">
            Grid делит строку на 12 колонок. Внешняя сетка задаёт сайдбар и основную область, а
            вложенная сетка раскладывает контент внутри main.
          </DemoHeading>
          <Paper withBorder p="md">
            <Grid columns={12} gap="md" align="stretch">
              <Grid.Col span={{ base: 12, md: 3 }}>
                <Paper withBorder p="md" h="100%" bg="gray.1">
                  <Stack gap="xs">
                    <Badge>Sidebar · 3 / 12</Badge>
                    <Text size="sm">Навигация, фильтры или настройки.</Text>
                  </Stack>
                </Paper>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 9 }}>
                <Stack gap="sm">
                  <Text fw={600}>Main · 9 / 12</Text>
                  <Grid columns={12} gap="sm">
                    <Grid.Col span={{ base: 12, sm: 8 }}>
                      <DemoContent>Основной контент · 8 / 12 вложенной сетки</DemoContent>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                      <DemoContent>Дополнительный блок · 4 / 12</DemoContent>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <DemoContent>Карточка 1</DemoContent>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <DemoContent>Карточка 2</DemoContent>
                    </Grid.Col>
                    <Grid.Col span={4}>
                      <DemoContent>Карточка 3</DemoContent>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Grid.Col>
            </Grid>
          </Paper>
          <Text size="sm" c="dimmed">
            На мобильном обе области занимают 12 / 12 и складываются вертикально; сайдбар можно
            переставить через prop order.
          </Text>
        </Stack>

        <Stack gap="md">
          <DemoHeading title="Grid: container queries">
            С type="container" responsive span зависит от ширины самого Grid, а не от viewport.
            Потяни за правый нижний угол демо и измени его ширину.
          </DemoHeading>
          <Paper
            withBorder
            p="md"
            style={{
              width: '100%',
              minWidth: 260,
              maxWidth: '100%',
              resize: 'horizontal',
              overflow: 'hidden',
            }}
          >
            <Grid
              type="container"
              breakpoints={{
                xs: '300px',
                sm: '500px',
                md: '700px',
                lg: '900px',
                xl: '1100px',
              }}
              gap="sm"
            >
              <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                <DemoContent>1 · base 12 / sm 6 / lg 3</DemoContent>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                <DemoContent>2 · base 12 / sm 6 / lg 3</DemoContent>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                <DemoContent>3 · base 12 / sm 6 / lg 3</DemoContent>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
                <DemoContent>4 · base 12 / sm 6 / lg 3</DemoContent>
              </Grid.Col>
            </Grid>
          </Paper>
          <Text size="sm" c="dimmed">
            breakpoints здесь — это ширины контейнера: до 500px одна колонка, от 500px две, от 900px
            четыре. В реальном компоненте resize-обёртка не нужна — она добавлена только для
            демонстрации.
          </Text>
        </Stack>
      </Stack>
    </Container>
  )
}
