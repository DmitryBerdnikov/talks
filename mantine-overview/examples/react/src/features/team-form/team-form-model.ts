import * as z from 'zod'

export const teamSchema = z
  .object({
    name: z.string().trim().min(3, 'Название должно содержать минимум 3 символа'),
    email: z.email({ error: 'Укажи корректный email' }),
    confirmEmail: z.string(),
    description: z.string().max(300, 'Максимум 300 символов'),
    notifications: z.boolean(),
    members: z
      .array(
        z.object({
          id: z.string(),
          name: z.string().trim().min(2, 'Минимум 2 символа'),
        }),
      )
      .min(1, 'Добавь хотя бы одного участника')
      .max(3, 'Максимум 3 участника'),
  })
  .refine((values) => values.email === values.confirmEmail, {
    error: 'Email не совпадают',
    path: ['confirmEmail'],
  })

export type TeamValues = z.infer<typeof teamSchema>

export function toPayload(values: TeamValues) {
  return {
    name: values.name.trim(),
    email: values.email,
    description: values.description.trim(),
    notifications: values.notifications,
    members: values.members.map((member) => ({
      ...member,
      name: member.name.trim(),
    })),
  }
}

export type TeamPayload = ReturnType<typeof toPayload>

export const initialValues: TeamValues = {
  name: '',
  email: '',
  confirmEmail: '',
  description: '',
  notifications: true,
  members: [{ id: 'first-member', name: '' }],
}
