import { useState } from 'react'
import {
  MantineProvider,
  Button,
  TextInput,
  MaskInput,
  MultiSelect,
  Switch,
  Checkbox,
  Radio,
  Slider,
  ActionIcon,
  CloseButton,
  CopyButton,
  FileButton,
  Badge,
  Group,
  Stack,
  Title,
  Text,
  DataList,
  Indicator,
  Accordion,
  Avatar,
} from '@mantine/core'
import '@mantine/core/styles.css'
import styles from './core-showcase.module.css'

function Core() {
  const [file, setFile] = useState<File | null>(null)
  return (
    <div className={styles.grid}>
      <div className={styles.column}>
        <Title order={3}>Inputs</Title>
        <section>
          <Stack gap="md">
            <TextInput label="Email" placeholder="Введите email" />
            <MaskInput
              label="MaskInput"
              mask="+7 (000) 000-00-00"
              tokens={{ '0': /\d/ }}
              placeholder="+7 (___) ___-__-__"
              inputMode="tel"
            />
            <MultiSelect
              label="MultiSelect"
              defaultValue={['React', 'TypeScript']}
              data={['React', 'TypeScript', 'CSS']}
            />
            <Group>
              <Switch defaultChecked label="Switch" />
              <Checkbox defaultChecked label="Checkbox" />
              <Radio defaultChecked label="Radio" />
            </Group>
            <Slider defaultValue={55} />
          </Stack>
        </section>
      </div>
      <div className={styles.column}>
        <Title order={3}>Buttons</Title>
        <section>
          <Stack gap="lg">
            <Group gap="sm">
              <Button>Сохранить</Button>
              <Button variant="light">Изменить</Button>
              <Button variant="outline">Отмена</Button>
            </Group>
            <Group gap="sm">
              <ActionIcon size="lg" aria-label="Добавить">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </ActionIcon>
              <ActionIcon size="lg" variant="light" aria-label="Настройки">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6" />
                </svg>
              </ActionIcon>
              <CloseButton size="lg" aria-label="Закрыть" />
            </Group>
            <CopyButton value="hello@fuse8.com">
              {({ copied, copy }) => (
                <Button variant="light" color={copied ? 'teal' : 'blue'} onClick={copy}>
                  {copied ? 'Скопировано' : 'Скопировать email'}
                </Button>
              )}
            </CopyButton>
            <FileButton onChange={setFile} accept="image/png,image/jpeg">
              {(props) => (
                <Button {...props} variant="outline">
                  Выбрать изображение
                </Button>
              )}
            </FileButton>
            {file && (
              <Text size="sm" c="dimmed" lineClamp={1}>
                {file.name}
              </Text>
            )}
          </Stack>
        </section>
      </div>
      <div className={styles.column}>
        <Title order={3}>Data display</Title>
        <section>
          <Stack gap="lg">
            <Group justify="space-between">
              <Group gap="sm">
                <Indicator color="green" size={10} offset={4} position="bottom-end" withBorder>
                  <Avatar color="blue" radius="xl" size="lg">
                    DB
                  </Avatar>
                </Indicator>
                <div>
                  <Text fw={500}>Дмитрий Бердников</Text>
                  <Text size="sm" c="dimmed">
                    Frontend developer
                  </Text>
                </div>
              </Group>
            </Group>
            <DataList gap="xs" labelWidth={80}>
              <DataList.Item>
                <DataList.ItemLabel>Команда</DataList.ItemLabel>
                <DataList.ItemValue>Fuse8</DataList.ItemValue>
              </DataList.Item>
              <DataList.Item>
                <DataList.ItemLabel>Статус</DataList.ItemLabel>
                <DataList.ItemValue>
                  <Badge color="green" variant="light">
                    Активен
                  </Badge>
                </DataList.ItemValue>
              </DataList.Item>
            </DataList>
            <Accordion defaultValue="profile">
              <Accordion.Item value="profile">
                <Accordion.Control>О пользователе</Accordion.Control>
                <Accordion.Panel>Разрабатывает интерфейсы.</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="access">
                <Accordion.Control>Права доступа</Accordion.Control>
                <Accordion.Panel>Редактирование проектов и управление командой.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Stack>
        </section>
      </div>
    </div>
  )
}

export function CoreShowcase() {
  return (
    <MantineProvider forceColorScheme="light">
      <main className={styles.showcase}>
        <Core />
      </main>
    </MantineProvider>
  )
}
