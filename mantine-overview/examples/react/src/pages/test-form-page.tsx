import { useState } from 'react'
import { Button, Checkbox, Code, Select, Text, TextInput, NumberInput, Group } from '@mantine/core'
import { useForm, schemaResolver } from '@mantine/form'

import * as z from 'zod'

const teamSchema = z
  .object({
    name: z.string().min(3, 'Минимум 3 символа'),
    email: z.email({ error: 'Некорректный email' }),
    confirmEmail: z.string(),
    role: z.enum(['admin', 'user', 'guest']).nullable(),
    age: z.union([z.number(), z.string()]),
    description: z.string(),
    notifications: z.boolean(),
    profile: z.object({
      city: z.string().min(2, 'Минимум 2 символа'),
    }),
    members: z
      .array(
        z.object({
          id: z.string(),
          name: z.string().min(2, 'Минимум 2 символа'),
        }),
      )
      .min(1, 'Добавь хотя бы одного участника')
      .max(3, 'Можно добавить максимум 3 участников'),
  })
  .refine((values) => values.email === values.confirmEmail, {
    error: 'Email не совпадают',
    path: ['confirmEmail'],
  })
  .refine(
    (values) => {
      if (values.role === 'admin') {
        if (typeof values.age === 'number' && values.age >= 18) {
          return true
        }

        return false
      }

      return true
    },
    { error: 'Для администратора укажи возраст от 18 лет', path: ['age'] },
  )

type Values = z.infer<typeof teamSchema>

export function TestFormPage() {
  const form = useForm<Values>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      confirmEmail: '',
      description: '',
      notifications: true,
      role: null,
      age: '',
      profile: { city: '' },
      members: [{ id: 'member-1', name: '' }],
    },
    validate: schemaResolver(teamSchema, { sync: true }),
    validateInputOnBlur: true,
    // validateInputOnChange: true,
    clearInputErrorOnChange: true,
  })

  const [submittedValues, setSubmittedValues] = useState<typeof form.values>()

  const description = form.useWatchValue('description')

  console.log('render')

  const emailProps = form.getInputProps('email')
  const roleProps = form.getInputProps('role')

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 1500))

        if (values.email === 'taken@mail.ru') {
          form.setFieldError('email', 'Этот email уже занят')
          return
        }

        setSubmittedValues(values)
      })}
    >
      {form.isDirty('members') ? 'dirty' : 'not'}
      {form.isDirty('members.0') ? 'dirty' : 'not'}
      <Button
        type="button"
        onClick={() => {
          const loaded = {
            ...form.getValues(),
            name: 'Команда разработки',
            members: [
              { id: 'anna', name: 'Анна' },
              { id: 'boris', name: 'Борис' },
            ],
          }

          form.setInitialValues(loaded)
          form.setValues(loaded)
          // form.resetDirty(loaded);
        }}
      >
        Загрузить команду
      </Button>

      {form.getValues().members.map((item, index) => (
        <Group key={item.id}>
          <TextInput
            {...form.getInputProps(`members.${index}.name`)}
            key={form.key(`members.${index}.name`)}
            label="Участник"
            placeholder="Введите имя"
          />
          <Button
            type="button"
            disabled={index === 0}
            onClick={() =>
              form.reorderListItem('members', {
                from: index,
                to: index - 1,
              })
            }
          >
            Вверх
          </Button>
          <Button type="button" onClick={() => form.removeListItem('members', index)}>
            Удалить
          </Button>
        </Group>
      ))}
      <Button
        type="button"
        disabled={form.getValues().members.length >= 3}
        onClick={() => {
          form.insertListItem('members', { name: '', id: String(Math.random()) })
          form.clearFieldError('members')
        }}
      >
        Добавить участника
      </Button>
      {form.errors.members && (
        <Text c="red" size="sm">
          {form.errors.members}
        </Text>
      )}

      <br />
      <Button
        type="button"
        onClick={() => {
          const result = teamSchema.safeParse(form.getValues())
          console.log(result)
        }}
      >
        Проверить Zod
      </Button>

      <TextInput
        {...form.getInputProps('profile.city')}
        key={form.key('profile.city')}
        label="Город"
      />

      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <TextInput
        {...emailProps}

        key={form.key('email')}
        mt="md"
        label="Email"
        placeholder="Email"
        onChange={(event) => {
          emailProps.onChange(event)
          if (form.isTouched('confirmEmail')) {
            form.validateField('confirmEmail')
          }
        }}
      />
      <TextInput
        {...form.getInputProps('confirmEmail')}
        key={form.key('confirmEmail')}
        mt="md"
        label="Confirm Email"
        placeholder="Confirm Email"
      />
      <TextInput
        {...form.getInputProps('description')}
        key={form.key('description')}
        mt="md"
        label="Description"
        placeholder="Description"
      />
      <Button type="button" onClick={() => form.validateField('confirmEmail')}>
        Проверить подтверждение
      </Button>
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
      />
      <Select
        {...roleProps}
        key={form.key('role')}
        label="Role"
        placeholder="Select role"
        data={['admin', 'user', 'guest']}
        clearable
        onChange={(value) => {
          roleProps.onChange(value)

          if (form.isTouched('age')) {
            form.validateField('age')
          }
        }}
      />
      <Button type="button" onClick={() => form.setFieldValue('profile.city', 'Москва')}>
        Подставить город
      </Button>
      <Checkbox
        {...form.getInputProps('notifications', { type: 'checkbox' })}
        key={form.key('notifications')}
        label="Уведомления"
      />
      <Button onClick={() => form.setFieldValue('description', 'Новое описание')}>set field</Button>
      <Button type="submit" loading={form.submitting}>
        Сохранить
      </Button>

      <Button
        type="button"
        onClick={() => {
          form.reset()
          setSubmittedValues(undefined)
        }}
      >
        Сбросить
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  )
}
