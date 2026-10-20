import { MantineProvider } from '@mantine/core'
import { UsersPage } from './users-page'
import { usersTheme } from './users-theme'

export function CustomUsersPage() {
  return (
    <MantineProvider
      theme={usersTheme}
      forceColorScheme="light"
      cssVariablesSelector="[data-custom-users-theme]"
    >
      <div
        data-custom-users-theme
        data-mantine-color-scheme="light"
        style={{ width: '100%', minWidth: 0, alignSelf: 'stretch' }}
      >
        <UsersPage customized />
      </div>
    </MantineProvider>
  )
}
