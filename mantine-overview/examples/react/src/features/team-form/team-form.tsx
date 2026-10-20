import { Alert, Button, Code, Group, Stack, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import { TeamFormProvider } from './team-form-context'
import { TeamDetails } from './team-details'
import { TeamContact } from './team-contact'
import { TeamMembers } from './team-members'
import { TeamPreview } from './team-preview'
import { useTeamForm } from './use-team-form'
import styles from './team-form.module.css'

export function TeamForm() {
  const { form, savedPayload, saveError, loadExample, reset, onSubmit } = useTeamForm()

  console.log({ isValid: form.isValid() })
  return (
    <TeamFormProvider form={form}>
      <Button onClick={() => form.validate()}>validate</Button>
      <div className={styles.page}>
        <header className={styles.header}>
          <Link to="/" className={styles.brand}>
            <span className={styles.brandMark}>с</span>состав
            <span className={styles.brandDivider}>/</span>
            <span className={styles.brandCaption}>рабочее пространство</span>
          </Link>
          <Link to="/test-form" className={styles.backLink}>
            Учебный черновик ↗
          </Link>
        </header>
        <main className={styles.main}>
          <div className={styles.intro}>
            <div>
              <Text className={styles.eyebrow}>КОМАНДЫ / НОВАЯ КОМАНДА</Text>
              <h1 className={styles.title}>
                Хорошая работа
                <br />
                начинается с команды<span>.</span>
              </h1>
              <Text className={styles.subtitle}>
                Дай ей имя, собери участников и оставайся на связи.
              </Text>
            </div>
            <Button
              type="button"
              variant="default"
              className={styles.exampleButton}
              disabled={form.submitting}
              onClick={loadExample}
            >
              Заполнить пример ↗
            </Button>
          </div>
          <div className={styles.layout}>
            <form onSubmit={onSubmit}>
              <Stack gap={20}>
                {saveError && (
                  <Alert color="red" title="Не удалось сохранить" role="alert">
                    {saveError}
                  </Alert>
                )}
                {savedPayload && (
                  <Alert color="teal" title="Команда сохранена" role="status">
                    «{savedPayload.name}» готова к работе.
                  </Alert>
                )}
                <fieldset disabled={form.submitting} className={styles.fieldset}>
                  <TeamDetails />
                  <TeamContact />
                  <TeamMembers />
                </fieldset>
                <div className={styles.footer}>
                  <Text size="sm" c="dimmed">
                    Всё готово? Собираем команду.
                  </Text>
                  <Group gap={10}>
                    <Button
                      type="button"
                      variant="default"
                      disabled={form.submitting}
                      onClick={reset}
                    >
                      Сбросить
                    </Button>
                    <Button type="submit" color="teal" loading={form.submitting}>
                      Сохранить команду ↗
                    </Button>
                  </Group>
                </div>
              </Stack>
            </form>
            <aside className={styles.aside}>
              <TeamPreview />
              <div className={styles.sideNote}>
                <span>↗</span>
                <Text size="sm">
                  Начни с малого.
                  <br />
                  Состав команды можно изменить позже.
                </Text>
              </div>
              {savedPayload && (
                <details className={styles.savedDetails}>
                  <summary>Данные последнего сохранения</summary>
                  <Code block mt="sm">
                    {JSON.stringify(savedPayload, null, 2)}
                  </Code>
                </details>
              )}
            </aside>
          </div>
          <Text className={styles.bottomNote}>СОСТАВ · ПРОСТРАНСТВО ДЛЯ СОВМЕСТНОЙ РАБОТЫ</Text>
        </main>
      </div>
    </TeamFormProvider>
  )
}
