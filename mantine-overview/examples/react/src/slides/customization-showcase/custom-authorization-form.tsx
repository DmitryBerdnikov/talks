import { useState } from 'react'
import {
  Box,
  Button,
  MantineProvider,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  createTheme,
  type TextInputProps,
} from '@mantine/core'
import { Icon } from './icon'
import { useAuthorizationForm } from './use-authorization-form'

// Shared visual defaults for the custom form only; field-specific icons stay in JSX.
export const authorizationTheme = createTheme({
  headings: {
    fontWeight: '800',
    sizes: { h2: { fontSize: 'clamp(2rem, 3.75vw, 3rem)', lineHeight: '1.1' } },
  },
  components: {
    Text: Text.extend({ defaultProps: { size: 'xl' } }),
    TextInput: TextInput.extend({ defaultProps: { size: 'xl' } }),
    PasswordInput: PasswordInput.extend({ defaultProps: { size: 'xl' } }),
    Button: Button.extend({
      defaultProps: {
        size: 'xl',
      },
    }),
  },
})

function customInputStyles(focused: boolean, error = false) {
  return {
    wrapper: {
      '--input-padding-inline-start': 'calc(var(--input-left-section-size) + 16px)',
      '--input-bg': focused ? '#f0f5ff' : '#f8f9fb',
      '--input-bd': error ? '#e03131' : focused ? '#6ba3ff' : '#cbd5e1',
      '--input-bd-focus': error ? '#e03131' : '#6ba3ff',
    },
    label: {
      display: 'block',
      marginBottom: 6,
      fontSize: 16,
      lineHeight: 1.4,
    },
    error: { marginTop: 6, fontSize: 14 },
  } satisfies NonNullable<TextInputProps['styles']>
}

function FieldIcon({ name }: { name: 'mail' | 'lock' }) {
  return (
    <Box
      component="span"
      w={64}
      h={28}
      display="flex"
      aria-hidden="true"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #d8dfeb',
      }}
    >
      <Icon name={name} />
    </Box>
  )
}

export function CustomAuthorizationForm() {
  const form = useAuthorizationForm()
  const [focused, setFocused] = useState<'email' | 'password' | null>(null)

  return (
    <MantineProvider
      theme={authorizationTheme}
      forceColorScheme="light"
      cssVariablesSelector="[data-custom-authorization-theme]"
    >
      <Paper
        data-custom-authorization-theme
        component="form"
        {...form.formProps}
        p={{ md: 36 }}
        flex={1}
        miw={0}
        mih={{ base: 0, sm: 500 }}
      >
        <Stack component="header" gap={8}>
          <Title order={2} id={form.titleId} style={{ letterSpacing: '-0.035em' }}>
            Авторизация
          </Title>
          <Text c="dimmed">Войдите в аккаунт</Text>
        </Stack>
        <Stack mt={28} gap={24}>
          <TextInput
            {...form.emailProps}
            leftSection={<FieldIcon name="mail" />}
            onFocus={() => setFocused('email')}
            onBlur={() => {
              form.emailProps.onBlur()
              setFocused(null)
            }}
            styles={customInputStyles(focused === 'email', Boolean(form.emailProps.error))}
          />
          <PasswordInput
            {...form.passwordProps}
            leftSection={<FieldIcon name="lock" />}
            vars={() => ({ root: { '--psi-icon-size': '22px' } })}
            onFocus={() => setFocused('password')}
            onBlur={() => setFocused(null)}
            styles={{
              ...customInputStyles(focused === 'password'),
            }}
          />
        </Stack>
        <Button
          type="submit"
          fullWidth
          mt={28}
          rightSection={<Icon name={form.validated ? 'check' : 'arrow'} />}
          styles={(theme) => ({ root: { boxShadow: theme.shadows.sm } })}
        >
          Войти
        </Button>
      </Paper>
    </MantineProvider>
  )
}
