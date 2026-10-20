import { Paper, Stack, Text, Textarea, TextInput, Title } from '@mantine/core'
import { useTeamFormContext } from './team-form-context'
import styles from './team-form.module.css'

export function TeamDetails() {
  const form = useTeamFormContext()
  return (
    <Paper className={styles.card}>
      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>01</span>
        <div>
          <Title order={2} className={styles.sectionTitle}>
            О команде
          </Title>
          <Text size="sm" c="dimmed">
            Имя и несколько слов о вашей работе
          </Text>
        </div>
      </div>
      <Stack gap={20}>
        <TextInput
          {...form.getInputProps('name')}
          key={form.key('name')}
          label="Название команды"
          placeholder="Например, Студия Север"
          withAsterisk
          radius="md"
          size="md"
        />
        <Textarea
          {...form.getInputProps('description')}
          key={form.key('description')}
          label="О команде"
          description="Необязательно · до 300 символов"
          placeholder="Что вы делаете вместе?"
          autosize
          minRows={3}
          maxRows={6}
          radius="md"
          size="md"
        />
      </Stack>
    </Paper>
  )
}
