import { Badge, Button, Paper, Stack, Text, TextInput, Title } from '@mantine/core'
import { useTeamFormContext } from './team-form-context'
import styles from './team-form.module.css'

export function TeamMembers() {
  const form = useTeamFormContext()
  const members = form.getValues().members

  return (
    <Paper className={styles.card}>
      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>03</span>
        <div>
          <Title order={2} className={styles.sectionTitle}>
            Участники
          </Title>
          <Text size="sm" c="dimmed">
            Небольшая команда — от 1 до 3 человек
          </Text>
        </div>
        <Badge color="teal" variant="light" className={styles.memberCount}>
          {members.length} / 3
        </Badge>
      </div>
      <Stack gap={16}>
        {members.map((member, index) => (
          <div key={member.id} className={styles.memberRow}>
            <span className={styles.avatar}>{String(index + 1).padStart(2, '0')}</span>
            <TextInput
              {...form.getInputProps(`members.${index}.name`)}
              key={form.key(`members.${index}.name`)}
              label={`Участник ${index + 1}`}
              placeholder="Имя участника"
              radius="md"
              size="md"
              className={styles.memberInput}
            />
            <div className={styles.rowActions}>
              <button
                type="button"
                className={styles.iconButton}
                disabled={index === 0}
                aria-label={`Поднять участника ${index + 1}`}
                onClick={() =>
                  form.reorderListItem('members', {
                    from: index,
                    to: index - 1,
                  })
                }
              >
                ↑
              </button>
              <button
                type="button"
                className={styles.iconButton}
                aria-label={`Удалить участника ${index + 1}`}
                onClick={() => form.removeListItem('members', index)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
        {form.errors.members && (
          <Text size="sm" c="red" role="alert">
            {form.errors.members}
          </Text>
        )}
        <Button
          type="button"
          variant="light"
          color="teal"
          className={styles.addButton}
          disabled={members.length >= 3}
          onClick={() => {
            form.insertListItem('members', {
              id: crypto.randomUUID(),
              name: '',
            })
            form.clearFieldError('members')
          }}
        >
          ＋ Добавить участника
        </Button>
      </Stack>
    </Paper>
  )
}
