import { Link } from 'react-router-dom'
import {
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { ExampleHeader } from './example-header'

export function ProductPage() {
  const slide = {
    title: 'Запуск нового проекта',
    subtitle: 'Все задачи, сроки и участники в одном месте.',
    progress: 65,
    items: ['Исследовать потребности клиентов', 'Подготовить прототип', 'Согласовать первый релиз'],
  }
  return (
    <AppShell header={{ height: 60 }} padding="lg">
      <AppShell.Header>
        <ExampleHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="lg" py="sm">
          <Stack gap="md">
            <Grid gap="xl" align="center">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Stack gap="lg" maw={440}>
                  <Group>
                    <Text fw={700} size="xl">
                      Focus
                    </Text>
                    <Badge variant="light">Для небольших команд</Badge>
                  </Group>
                  <Title order={1}>
                    Меньше хаоса.
                    <br />
                    Больше сделанного.
                  </Title>
                  <Text size="lg" c="dimmed">
                    Планируйте проекты, обсуждайте идеи и двигайтесь к цели вместе. Всё нужное для
                    работы — в одном пространстве.
                  </Text>
                  <Group>
                    <Button component={Link} to="/examples/feedback">
                      Обсудить подключение
                    </Button>
                  </Group>
                  <Text size="sm" c="dimmed">
                    Задачи · Команда · Понятный прогресс
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Paper withBorder p="md">
                  <Stack gap="xs">
                    <Group justify="space-between">
                      <Text fw={600}>Рабочее пространство</Text>
                      <Badge color="green" variant="light">
                        В работе
                      </Badge>
                    </Group>
                    <Box>
                      <Title order={3}>{slide.title}</Title>
                      <Text size="sm" c="dimmed">
                        {slide.subtitle}
                      </Text>
                    </Box>
                    <Stack gap="xs">
                      {slide.items.map((item, index) => (
                        <Paper key={item} withBorder p="sm">
                          <Group justify="space-between" wrap="nowrap">
                            <Text size="sm">{item}</Text>
                            <Badge variant="light" color={index === 0 ? 'green' : 'blue'}>
                              {index === 0 ? 'Готово' : 'В работе'}
                            </Badge>
                          </Group>
                        </Paper>
                      ))}
                    </Stack>
                    <Group justify="space-between">
                      <Text size="sm" c="dimmed">
                        Прогресс проекта
                      </Text>
                      <Text size="sm" fw={600}>
                        {slide.progress}%
                      </Text>
                    </Group>
                    <Progress value={slide.progress} />
                    <Group justify="space-between">
                      <Avatar.Group>
                        <Avatar color="blue">АН</Avatar>
                        <Avatar color="cyan">МК</Avatar>
                        <Avatar color="teal">ЕС</Avatar>
                      </Avatar.Group>
                    </Group>
                  </Stack>
                </Paper>
              </Grid.Col>
            </Grid>
            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              {[
                ['01', 'Ясные приоритеты', 'Соберите задачи и выберите, что важно прямо сейчас.'],
                ['02', 'Общий контекст', 'Обсуждения и решения всегда рядом с проектом.'],
                ['03', 'Видимый результат', 'Следите за этапами и отмечайте движение к цели.'],
              ].map(([number, title, description]) => (
                <Paper key={number} withBorder p="sm">
                  <Group gap="sm" mb="xs">
                    <ThemeIcon variant="light">{number}</ThemeIcon>
                    <Text fw={600}>{title}</Text>
                  </Group>
                  <Text size="sm" c="dimmed">
                    {description}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
