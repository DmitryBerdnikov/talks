import { useState } from 'react'
import { schemaResolver, useForm } from '@mantine/form'
import {
  teamSchema,
  initialValues,
  toPayload,
  type TeamValues,
  type TeamPayload,
} from './team-form-model'
import { saveTeam } from './team-form-service'

export function useTeamForm() {
  const [savedPayload, setSavedPayload] = useState<TeamPayload | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)
  const form = useForm<TeamValues, TeamPayload>({
    mode: 'uncontrolled',
    initialValues,
    validate: schemaResolver(teamSchema, { sync: true }),
    validateInputOnBlur: true,
    clearInputErrorOnChange: true,
    transformValues: toPayload,
  })

  function loadExample() {
    const example: TeamValues = {
      name: 'Студия Север',
      email: 'hello@sever.studio',
      confirmEmail: 'hello@sever.studio',
      description: 'Создаём цифровые продукты, которыми приятно пользоваться.',
      notifications: true,
      members: [
        { id: 'anna', name: 'Анна' },
        { id: 'boris', name: 'Борис' },
      ],
    }
    form.setInitialValues(example)
    form.setValues(example)
    form.resetDirty(example)
    form.resetTouched()
    setSaveError(null)
    setSavedPayload(null)
  }

  const onSubmit = form.onSubmit(
    async (payload) => {
      if (form.submitting) return
      const submitted = structuredClone(form.getValues())
      setSaveError(null)
      setSavedPayload(null)
      try {
        const result = await saveTeam(payload)
        if (result.emailTaken) {
          form.setFieldError('email', 'Этот email уже занят. Укажи другой адрес.')
          return
        }
        form.setInitialValues(submitted)
        form.resetDirty(submitted)
        setSavedPayload(payload)
      } catch {
        setSaveError('Не удалось связаться с сервером. Данные остались в форме — попробуй ещё раз.')
      }
    },
    (errors) => {
      const firstErrorPath = Object.keys(errors)[0]
      const node = form.getInputNode(firstErrorPath)

      node?.focus({
        preventScroll: true,
      })

      node?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    },
  )

  function reset() {
    form.reset()
    setSaveError(null)
    setSavedPayload(null)
  }

  return { form, savedPayload, saveError, loadExample, reset, onSubmit }
}
