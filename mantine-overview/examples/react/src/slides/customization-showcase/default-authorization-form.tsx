import { Button, Paper, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core'
import { Icon } from './icon'
import { useAuthorizationForm } from './use-authorization-form'

export function DefaultAuthorizationForm() {
  const form = useAuthorizationForm()
  return (
    <Paper
      component="form"
      {...form.formProps}
      p={{ base: 24, md: 40 }}
      flex={1}
      miw={0}
      mih={{ base: 0, sm: 500 }}
    >
      <Stack component="header" gap={8}>
        <Title order={1} id={form.titleId}>
          Авторизация
        </Title>
        <Text c="dimmed">Войдите в аккаунт</Text>
      </Stack>
      <Stack mt={32}>
        <TextInput {...form.emailProps} />
        <PasswordInput {...form.passwordProps} />
      </Stack>
      <Button
        type="submit"
        fullWidth
        mt="xl"
        rightSection={form.validated ? <Icon name="check" /> : undefined}
      >
        Войти
      </Button>
    </Paper>
  )
}
