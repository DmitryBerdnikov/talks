import {
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core'
import { ExampleHeader } from './example-header'

export function FeedbackPage() {
  return (
    <AppShell header={{ height: 60 }} padding="lg">
      <AppShell.Header>
        <ExampleHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="lg" py="xl">
          <Grid gap="xl" align="center">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Stack gap="lg" maw={430}>
                <Badge variant="light">Мы на связи</Badge>
                <Title order={1}>Хорошие продукты начинаются с разговора</Title>
                <Text size="lg" c="dimmed">
                  Расскажите, что можно сделать лучше. Ваши идеи помогают нам создавать удобный
                  сервис.
                </Text>
                <List spacing="sm">
                  <List.Item>Предложите новую возможность</List.Item>
                  <List.Item>Поделитесь впечатлениями</List.Item>
                  <List.Item>Задайте вопрос о продукте</List.Item>
                </List>
                <Divider />
                <Group>
                  <Avatar.Group>
                    <Avatar color="blue">АН</Avatar>
                    <Avatar color="cyan">МК</Avatar>
                    <Avatar color="teal">ЕС</Avatar>
                  </Avatar.Group>
                  <Box>
                    <Text size="sm" fw={500}>
                      Команда поддержки
                    </Text>
                    <Text size="sm" c="dimmed">
                      Внимательно читаем каждое обращение
                    </Text>
                  </Box>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Paper withBorder p="xl">
                <Stack gap="md">
                  <Box>
                    <Title order={3}>Поделитесь обратной связью</Title>
                    <Text size="sm" c="dimmed" mt="xs">
                      Заполните форму — мы будем рады помочь.
                    </Text>
                  </Box>
                  <Box component="form" onSubmit={(event) => event.preventDefault()}>
                    <Stack gap="sm">
                      <TextInput
                        label="Имя"
                        placeholder="Как к вам обращаться"
                        autoComplete="name"
                        required
                      />
                      <SimpleGrid cols={2}>
                        <TextInput
                          label="Телефон"
                          placeholder="+7 900 123-45-67"
                          type="tel"
                          autoComplete="tel"
                          required
                        />
                        <TextInput
                          label="Email"
                          placeholder="you@example.com"
                          type="email"
                          autoComplete="email"
                          required
                        />
                      </SimpleGrid>
                      <Textarea
                        label="Комментарий"
                        placeholder="Расскажите о вашей идее или вопросе"
                        minRows={3}
                        maxRows={3}
                        required
                      />
                      <Checkbox required label="Я согласен с политикой конфиденциальности" />
                      <Button type="submit" fullWidth>
                        Отправить сообщение
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
