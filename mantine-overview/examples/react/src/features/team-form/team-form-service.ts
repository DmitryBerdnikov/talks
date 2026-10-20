import type { TeamPayload } from './team-form-model'

// Учебная имитация API: задержка, занятый email и ошибка соединения.
export async function saveTeam(payload: TeamPayload) {
  await new Promise((resolve) => setTimeout(resolve, 1200))
  if (payload.email === 'offline@mail.ru') throw new Error('Connection failed')
  return { emailTaken: payload.email === 'taken@mail.ru' }
}
