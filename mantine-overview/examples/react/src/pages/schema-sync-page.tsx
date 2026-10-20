import { useState } from 'react'
import { Button, Code, Container, Group, Stack, Text, TextInput, Title } from '@mantine/core'
import { schemaResolver, useForm } from '@mantine/form'
import { Link } from 'react-router-dom'
import * as z from 'zod'
import styles from './schema-sync-page.module.css'

const schema = z.object({ name: z.string().min(3, 'Минимум 3 символа') })
const delayedSchema = schema.refine(
  async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return values.name.toLowerCase() !== 'admin'
  },
  { path: ['name'], error: 'Имя admin занято' },
)

type Kind = 'sync' | 'promise' | 'delayed'
const examples = {
  sync: {
    title: '1. Схема сразу → результат сразу',
    description: 'sync: true. Проверка длины имени не требует ожидания.',
    code: 'validate: schemaResolver(schema, { sync: true })\n\nconst result = form.validate();\nconsole.log(result.hasErrors);',
  },
  promise: {
    title: '2. Та же схема → результат в Promise',
    description:
      'Без sync: true. Проверка та же, но resolver оборачивает результат в Promise. Искусственной задержки здесь нет.',
    code: 'validate: schemaResolver(schema)\n\nconst pending = form.validate(); // Promise\nconst result = await pending;\nconsole.log(result.hasErrors);',
  },
  delayed: {
    title: '3. Схема с ожиданием → результат через 1,5 секунды',
    description:
      'Имитируем запрос в async refine. Имя admin занято. Здесь sync: true применять нельзя.',
    code: "const delayedSchema = schema.refine(async (values) => {\n  await new Promise((resolve) => setTimeout(resolve, 1500));\n  return values.name.toLowerCase() !== 'admin';\n}, { path: ['name'], error: 'Имя admin занято' });\n\nvalidate: schemaResolver(delayedSchema)\nconst result = await form.validate();",
  },
}

function Example({ kind }: { kind: Kind }) {
  const example = examples[kind]
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '' },
    validate:
      kind === 'sync'
        ? schemaResolver(schema, { sync: true })
        : schemaResolver(kind === 'delayed' ? delayedSchema : schema),
  })
  const [events, setEvents] = useState<string[]>([])
  const [running, setRunning] = useState(false)
  const [returned, setReturned] = useState('Ещё не запускали')
  const [resolved, setResolved] = useState('Ещё не запускали')

  async function run(method: 'validate' | 'isValid') {
    setRunning(true)
    setResolved('Ожидаем результат…')
    const start = performance.now()
    const lines: string[] = []
    const log = (message: string) => {
      lines.push(`${Math.round(performance.now() - start)} мс · ${message}`)
      setEvents([...lines])
    }
    try {
      log(`Вызываем form.${method}()`)
      const result = method === 'validate' ? form.validate() : form.isValid()
      if (result instanceof Promise) {
        setReturned('Promise — результат нужно получить через await')
        log('Вызов вернул Promise')
        if (method === 'isValid') {
          log(`Boolean(Promise) = ${Boolean(result)} — это НЕ ответ о валидности!`)
        }
        log('Следующая строка уже выполняется; результат ещё не прочитан')
        const value = await result
        setResolved(JSON.stringify(value, null, 2))
        log(`После await получили: ${JSON.stringify(value)}`)
      } else {
        setReturned(JSON.stringify(result, null, 2))
        setResolved('Ожидание не требуется — результат уже слева')
        log(`Вызов сразу вернул: ${JSON.stringify(result)}`)
        log('Следующая строка может использовать готовый результат')
      }
    } catch (error) {
      setResolved('Проверка завершилась исключением')
      log(error instanceof Error ? error.message : String(error))
    } finally {
      setRunning(false)
    }
  }

  return (
    <section className={styles.example} aria-labelledby={`title-${kind}`}>
      <Title order={2} id={`title-${kind}`}>
        {example.title}
      </Title>
      <Text mt="sm" c="dimmed">
        {example.description}
      </Text>
      <Code block mt="md">
        {example.code}
      </Code>
      <Stack mt="lg" gap="sm">
        <TextInput
          label="Имя для проверки"
          description="Пустое или ab — ошибка длины. Anna — корректно. admin — занят только в примере 3."
          key={form.key('name')}
          {...form.getInputProps('name')}
          disabled={running}
        />
        <Group>
          <Button disabled={running} onClick={() => run('validate')}>
            Запустить validate()
          </Button>
          <Button disabled={running} variant="light" onClick={() => run('isValid')}>
            Запустить isValid()
          </Button>
        </Group>
      </Stack>
      <div className={styles.results} aria-live="polite" aria-busy={running}>
        <div>
          <Text fw={600}>Что вернул вызов</Text>
          <Code block mt="xs">
            {returned}
          </Code>
        </div>
        <div>
          <Text fw={600}>Что получили после await</Text>
          <Code block mt="xs">
            {resolved}
          </Code>
        </div>
      </div>
      <Text fw={600} mt="md">
        Порядок событий
      </Text>
      <Code block mt="xs" aria-live="polite">
        {events.join('\n') || 'Нажми одну из кнопок выше.'}
      </Code>
    </section>
  )
}

export function SchemaSyncPage() {
  return (
    <Container size={900} py={48} className={styles.page}>
      <Group mb="xl">
        <Link to="/team-form">← Редактор команды</Link>
        <a href="https://mantine.dev/form/schema-validation/#sync-and-async-schemas">
          Документация Mantine
        </a>
      </Group>
      <Title order={1}>sync: true — посмотри, что возвращается</Title>
      <Text size="lg" mt="md">
        В каждом примере работают настоящие useForm и schemaResolver. В первых двух правила
        одинаковые. В третьем сама схема ждёт завершения проверки.
      </Text>
      <Text mt="md">
        Сначала оставь имя пустым и нажми isValid() в примерах 1 и 2. Затем введи admin в примере 3.
        Сравни результат вызова, результат после await и журнал.
      </Text>
      {(['sync', 'promise', 'delayed'] as const).map((kind) => (
        <Example key={kind} kind={kind} />
      ))}
      <Text mt="xl">
        Для текущей teamSchema оставляем sync: true: её правила синхронные. Асинхронное сохранение
        команды — отдельный этап и не меняет этот выбор.
      </Text>
      <Text mt="sm">
        Почему Promise в условии if оказался бы true даже при неверном имени? Если результат или код
        непонятен, спроси в чате.
      </Text>
    </Container>
  )
}
