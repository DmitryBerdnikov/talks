import { Divider, Group, Text } from '@mantine/core'
import { useTeamFormContext } from './team-form-context'
import styles from './team-form.module.css'

export function TeamPreview() {
  const form = useTeamFormContext()
  const teamName = form.useWatchValue('name')
  const members = form.useWatchValue('members')

  return (
    <div className={styles.preview}>
      <Text className={styles.previewLabel}>ВАША СЛЕДУЮЩАЯ ГЛАВА</Text>
      <div className={styles.art} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h2 className={styles.previewTitle}>{teamName.trim() || 'Место для больших идей'}</h2>
      <Text className={styles.previewText}>
        Люди, идеи и общий результат.
        <br />В одном пространстве.
      </Text>
      <Divider color="#ffffff30" my={28} />
      <Group justify="space-between">
        <Text size="sm" c="#d0e0d9">
          Участников
        </Text>
        <Text c="white" fw={600}>
          {members.length} из 3
        </Text>
      </Group>
    </div>
  )
}
