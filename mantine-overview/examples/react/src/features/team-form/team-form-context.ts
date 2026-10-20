import { createFormContext } from '@mantine/form'
import type { TeamValues, TeamPayload } from './team-form-model'

export const [TeamFormProvider, useTeamFormContext] = createFormContext<TeamValues, TeamPayload>()
