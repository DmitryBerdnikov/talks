import { useState } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { Link } from 'react-router-dom'
import {
  rem,
  em,
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  NavLink,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { ExampleHeader } from '../example-header'
import { UsersIcon } from './users-icon'

const users = [
  {
    id: 1,
    name: 'Анна Смирнова',
    email: 'anna@example.com',
    role: 'Администратор',
    status: 'Активен',
    date: '08.10.2026',
  },
  {
    id: 2,
    name: 'Михаил Волков',
    email: 'mikhail@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '07.10.2026',
  },
  {
    id: 3,
    name: 'Елена Морозова',
    email: 'elena@example.com',
    role: 'Участник',
    status: 'Приглашён',
    date: '06.10.2026',
  },
  {
    id: 4,
    name: 'Дмитрий Соколов',
    email: 'dmitry@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '05.10.2026',
  },
  {
    id: 5,
    name: 'Ольга Петрова',
    email: 'olga@example.com',
    role: 'Участник',
    status: 'Заблокирован',
    date: '04.10.2026',
  },
  {
    id: 6,
    name: 'Алексей Кузнецов',
    email: 'alexey@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '03.10.2026',
  },
  {
    id: 7,
    name: 'Мария Орлова',
    email: 'maria@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '02.10.2026',
  },
  {
    id: 8,
    name: 'Иван Попов',
    email: 'ivan@example.com',
    role: 'Участник',
    status: 'Приглашён',
    date: '01.10.2026',
  },
  {
    id: 9,
    name: 'София Лебедева',
    email: 'sofia@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '30.09.2026',
  },
  {
    id: 10,
    name: 'Павел Новиков',
    email: 'pavel@example.com',
    role: 'Редактор',
    status: 'Заблокирован',
    date: '29.09.2026',
  },
  {
    id: 11,
    name: 'Дарья Белова',
    email: 'daria@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '28.09.2026',
  },
  {
    id: 12,
    name: 'Артём Фролов',
    email: 'artem@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '27.09.2026',
  },
  {
    id: 13,
    name: 'Виктория Захарова',
    email: 'victoria@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '26.09.2026',
  },
  {
    id: 14,
    name: 'Никита Васильев',
    email: 'nikita@example.com',
    role: 'Участник',
    status: 'Приглашён',
    date: '25.09.2026',
  },
  {
    id: 15,
    name: 'Полина Павлова',
    email: 'polina@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '24.09.2026',
  },
  {
    id: 16,
    name: 'Сергей Романов',
    email: 'sergey@example.com',
    role: 'Администратор',
    status: 'Активен',
    date: '23.09.2026',
  },
  {
    id: 17,
    name: 'Ксения Григорьева',
    email: 'ksenia@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '22.09.2026',
  },
  {
    id: 18,
    name: 'Андрей Михайлов',
    email: 'andrey@example.com',
    role: 'Участник',
    status: 'Заблокирован',
    date: '21.09.2026',
  },
  {
    id: 19,
    name: 'Алиса Макарова',
    email: 'alisa@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '20.09.2026',
  },
  {
    id: 20,
    name: 'Роман Андреев',
    email: 'roman@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '19.09.2026',
  },
  {
    id: 21,
    name: 'Вероника Николаева',
    email: 'veronika@example.com',
    role: 'Участник',
    status: 'Приглашён',
    date: '18.09.2026',
  },
  {
    id: 22,
    name: 'Максим Федоров',
    email: 'maxim@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '17.09.2026',
  },
  {
    id: 23,
    name: 'Юлия Тихонова',
    email: 'julia@example.com',
    role: 'Редактор',
    status: 'Активен',
    date: '16.09.2026',
  },
  {
    id: 24,
    name: 'Егор Семёнов',
    email: 'egor@example.com',
    role: 'Участник',
    status: 'Активен',
    date: '15.09.2026',
  },
]

export function UsersPage({ customized = false }: { customized?: boolean }) {
  const { height, width } = useViewportSize()
  const reservedHeight = customized && width > 0 && width < 768 ? 415 : 315
  const pageSize = Math.max(1, Math.floor(((height || 768) - reservedHeight) / 54.6))
  const [query, setQuery] = useState('')
  const [role, setRole] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const filtered = users.filter(
    (user) =>
      `${user.name} ${user.email}`.toLowerCase().includes(query.toLowerCase()) &&
      (!role || user.role === role) &&
      (!status || user.status === status),
  )
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  const allSelected = visible.length > 0 && visible.every((user) => selected.includes(user.id))
  const toggleUser = (id: number) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )

  return (
    <AppShell
      w="100%"
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: 'sm', collapsed: { mobile: customized } }}
      padding="md"
    >
      <AppShell.Header>
        <ExampleHeader compact={customized} />
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Stack h="100%" justify="space-between">
          <Stack gap="lg">
            <Group gap="sm" px="xs">
              <ThemeIcon size="lg" variant="light">
                F
              </ThemeIcon>
              <Box>
                <Text fw={600} size="sm">
                  Focus
                </Text>
                <Text size="xs" c="dimmed">
                  Рабочее пространство
                </Text>
              </Box>
            </Group>
            <Divider />
            <Stack gap="xs">
              <Text size="xs" fw={600} c="dimmed" px="sm">
                Управление
              </Text>
              <NavLink
                component={Link}
                to={customized ? '/examples/users-custom' : '/examples/users'}
                label="Пользователи"
                description="Участники и доступ"
                active
                leftSection={
                  <ThemeIcon variant="light" size="sm">
                    П
                  </ThemeIcon>
                }
              />
            </Stack>
            <Stack gap="xs">
              <Text size="xs" fw={600} c="dimmed" px="sm">
                Сервис
              </Text>
              <NavLink
                component={Link}
                to="/examples/feedback"
                label="Обратная связь"
                description="Связаться с командой"
                leftSection={
                  <ThemeIcon variant="light" color="gray" size="sm">
                    О
                  </ThemeIcon>
                }
              />
              <NavLink
                component={Link}
                to="/examples/product"
                label="Продукт"
                description="Возможности Focus"
                leftSection={
                  <ThemeIcon variant="light" color="gray" size="sm">
                    F
                  </ThemeIcon>
                }
              />
            </Stack>
          </Stack>
          <Stack gap="sm">
            <Divider />
            <Group gap="sm" px="xs">
              <Avatar size="sm" color={customized ? 'cobalt' : 'blue'}>
                АК
              </Avatar>
              <Box>
                <Text size="xs" fw={500}>
                  Александр
                </Text>
                <Text size="xs" c="dimmed">
                  Администратор
                </Text>
              </Box>
            </Group>
          </Stack>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Stack gap="md" h={{ base: 'auto', sm: 'calc(100vh - 92px)' }}>
          <Group justify="space-between" h={{ base: 'auto', sm: 42 }}>
            <Title order={2}>Пользователи</Title>
            <Button leftSection={customized ? <UsersIcon name="plus" /> : undefined}>
              Создать {rem('12px')} {em('12px')}
            </Button>
          </Group>
          <Grid align="center" h={{ base: 'auto', sm: 42 }}>
            <Grid.Col span={customized ? { base: 12, sm: 6 } : 6}>
              <TextInput
                aria-label="Поиск"
                leftSection={customized ? <UsersIcon name="search" /> : undefined}
                placeholder="Имя или email"
                value={query}
                onChange={(event) => {
                  setQuery(event.currentTarget.value)
                  setPage(1)
                }}
              />
            </Grid.Col>
            <Grid.Col span={customized ? { base: 6, sm: 3 } : 3}>
              <Select
                aria-label="Роль"
                placeholder="Все роли"
                clearable
                data={['Администратор', 'Редактор', 'Участник']}
                value={role}
                onChange={(value) => {
                  setRole(value)
                  setPage(1)
                }}
              />
            </Grid.Col>
            <Grid.Col span={customized ? { base: 6, sm: 3 } : 3}>
              <Select
                aria-label="Статус"
                placeholder="Все статусы"
                clearable
                data={['Активен', 'Приглашён', 'Заблокирован']}
                value={status}
                onChange={(value) => {
                  setStatus(value)
                  setPage(1)
                }}
              />
            </Grid.Col>
          </Grid>
          <Paper
            withBorder={!customized}
            p={customized ? 0 : 'sm'}
            flex={{ base: 'initial', sm: 1 }}
            mih={0}
          >
            <Stack gap={customized ? 0 : 'md'} h="100%" justify="space-between">
              <Table.ScrollContainer minWidth={650}>
                <Table highlightOnHover verticalSpacing="xs" fz="xs">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>
                        <Checkbox
                          size="xs"
                          aria-label="Выбрать всех на странице"
                          checked={allSelected}
                          indeterminate={
                            !allSelected && visible.some((u) => selected.includes(u.id))
                          }
                          onChange={() =>
                            setSelected((current) =>
                              allSelected
                                ? current.filter((id) => !visible.some((u) => u.id === id))
                                : [...new Set([...current, ...visible.map((u) => u.id)])],
                            )
                          }
                        />
                      </Table.Th>
                      <Table.Th>Пользователь</Table.Th>
                      <Table.Th>Роль</Table.Th>
                      <Table.Th>Статус</Table.Th>
                      <Table.Th>Добавлен</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {visible.map((user) => (
                      <Table.Tr
                        key={user.id}
                        bg={customized && selected.includes(user.id) ? 'cobalt.0' : undefined}
                      >
                        <Table.Td>
                          <Checkbox
                            size="xs"
                            aria-label={`Выбрать ${user.name}`}
                            checked={selected.includes(user.id)}
                            onChange={() => toggleUser(user.id)}
                          />
                        </Table.Td>
                        <Table.Td>
                          <Group gap="xs" wrap="nowrap">
                            <Avatar
                              size={customized ? 30 : 'sm'}
                              color={customized ? 'cobalt' : 'blue'}
                            >
                              {user.name
                                .split(' ')
                                .map((part) => part[0])
                                .join('')}
                            </Avatar>
                            <Box>
                              <Text
                                size={customized ? '13px' : 'xs'}
                                fw={customized ? 650 : 500}
                                lh={customized ? '18px' : undefined}
                              >
                                {user.name}
                              </Text>
                              <Text
                                size={customized ? '11px' : 'xs'}
                                c={customized ? '#566383' : 'dimmed'}
                                lh={customized ? '16px' : undefined}
                              >
                                {user.email}
                              </Text>
                            </Box>
                          </Group>
                        </Table.Td>
                        <Table.Td>
                          <Text
                            size="xs"
                            c={
                              customized
                                ? user.role === 'Администратор'
                                  ? '#7030b5'
                                  : user.role === 'Редактор'
                                    ? '#2448c6'
                                    : '#087579'
                                : undefined
                            }
                            bg={
                              customized
                                ? user.role === 'Администратор'
                                  ? '#f0e3ff'
                                  : user.role === 'Редактор'
                                    ? '#e2eaff'
                                    : '#d9f4f1'
                                : undefined
                            }
                            px={customized ? 8 : undefined}
                            py={customized ? 3 : undefined}
                            w={customized ? 'fit-content' : undefined}
                            fw={customized ? 500 : undefined}
                            style={customized ? { borderRadius: 6 } : undefined}
                          >
                            {user.role}
                          </Text>
                        </Table.Td>
                        <Table.Td>
                          <Badge
                            size={customized ? 'md' : 'sm'}
                            color={
                              user.status === 'Активен'
                                ? 'green'
                                : user.status === 'Приглашён'
                                  ? 'blue'
                                  : 'gray'
                            }
                            variant="light"
                            leftSection={
                              customized ? (
                                <Box
                                  w={5}
                                  h={5}
                                  bg="currentColor"
                                  style={{ borderRadius: '50%' }}
                                />
                              ) : undefined
                            }
                          >
                            {user.status}
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Text size="xs" c="dimmed">
                            {user.date}
                          </Text>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Table.ScrollContainer>
              <Group
                justify="space-between"
                px={customized ? 14 : undefined}
                py={customized ? 12 : undefined}
                bg={customized ? '#fff' : undefined}
                style={customized ? { borderTop: '1px solid #edf1f6' } : undefined}
              >
                <Text size={customized ? 'xs' : 'sm'} c="dimmed">
                  Найдено: {filtered.length} · Выбрано: {selected.length}
                </Text>
                <Pagination size="sm" total={pageCount} value={currentPage} onChange={setPage} />
              </Group>
            </Stack>
          </Paper>
        </Stack>
      </AppShell.Main>
    </AppShell>
  )
}
