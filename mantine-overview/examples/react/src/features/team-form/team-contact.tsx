import { Checkbox, Paper, Text, TextInput, Title } from '@mantine/core'
import { useTeamFormContext } from './team-form-context'
import styles from './team-form.module.css'
import { NotificationToggle } from './notificatoin-toggle'

export function TeamContact() {
  const form = useTeamFormContext()
  const emailProps = form.getInputProps('email')
  return (
    <Paper className={styles.card}>
      <div className={styles.sectionHeading}>
        <span className={styles.sectionNumber}>02</span>
        <div>
          <Title order={2} className={styles.sectionTitle}>
            На связи
          </Title>
          <Text size="sm" c="dimmed">
            Адрес для важных сообщений команды
          </Text>
        </div>
      </div>
      <div className={styles.emailGrid}>
        <TextInput
          {...emailProps}
          key={form.key('email')}
          type="email"
          label="Email владельца"
          placeholder="you@studio.ru"
          withAsterisk
          radius="md"
          size="md"
          onChange={(event) => {
            emailProps.onChange(event)
            if (form.isTouched('confirmEmail')) form.validateField('confirmEmail')
          }}
        />
        <TextInput
          {...form.getInputProps('confirmEmail')}
          key={form.key('confirmEmail')}
          type="email"
          label="Повтори email"
          placeholder="Тот же адрес ещё раз"
          withAsterisk
          radius="md"
          size="md"
        />
      </div>
      <NotificationToggle
        {...form.getInputProps('notifications')}
        key={form.key('notifications')}
      />
    </Paper>
  )
}
