import { useId, useState, type FormEvent, type ChangeEvent } from 'react'
import { isEmail } from '@mantine/form'

const validateEmail = isEmail('Неверный email')

// Shared behavior only: each form owns its markup and component props.
export function useAuthorizationForm() {
  const id = useId()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [validated, setValidated] = useState(false)

  return {
    titleId: id + '-title',
    validated,
    formProps: {
      'aria-labelledby': id + '-title',
      'data-validated': validated || undefined,
      onInvalid: () => setEmailTouched(true),
      onSubmit: (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setEmailTouched(true)
        // Local demo validation; no credentials leave the page.
        setValidated(!validateEmail(email) && password.length > 0)
      },
    },
    emailProps: {
      id: id + '-email',
      label: 'Email',
      placeholder: 'example@mail.com',
      type: 'email',
      autoComplete: 'email',
      required: true,
      withAsterisk: false,
      value: email,
      error: emailTouched ? validateEmail(email) : undefined,
      onBlur: () => setEmailTouched(true),
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
        setValidated(false)
      },
    },
    passwordProps: {
      id: id + '-password',
      label: 'Пароль',
      placeholder: 'Пароль',
      autoComplete: 'current-password',
      required: true,
      withAsterisk: false,
      value: password,
      visible,
      onVisibilityChange: setVisible,
      visibilityToggleFocusable: true,
      visibilityToggleButtonProps: {
        'aria-label': visible ? 'Скрыть пароль' : 'Показать пароль',
      },
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
        setValidated(false)
      },
    },
  }
}
