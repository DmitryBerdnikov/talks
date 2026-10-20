import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BasePage } from './base-page'
import { ContainerPage } from './container-page'
import { GridPage } from './grid-page'
import { TestFormPage } from './test-form-page'
import { TeamFormPage } from './team-form-page'
import { SchemaSyncPage } from './schema-sync-page'

export function PagesApp() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <BrowserRouter>
        <Routes>
          <Route path="/base" element={<BasePage />} />
          <Route path="/container" element={<ContainerPage />} />
          <Route path="/grid" element={<GridPage />} />
          <Route path="/test-form" element={<TestFormPage />} />
          <Route path="/team-form" element={<TeamFormPage />} />
          <Route path="/schema-sync" element={<SchemaSyncPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
