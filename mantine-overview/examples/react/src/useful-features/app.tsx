import { Center, MantineProvider } from '@mantine/core'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Polymorphic } from './polymorphic'
import { StatusBadge } from './custom-component'
import '@mantine/core/styles.css'

export function UsefulFeaturesApp() {
  return (
    <MantineProvider>
      <Center h="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="/polymorphic" element={<Polymorphic />} />
            <Route
              path="/custom-component"
              element={<StatusBadge active bg="green.1" c="green.9" fw={600} fz="sm" />}
            />
          </Routes>
        </BrowserRouter>
      </Center>
    </MantineProvider>
  )
}
