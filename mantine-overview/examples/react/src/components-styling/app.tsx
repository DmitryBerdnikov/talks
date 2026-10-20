import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@mantine/core/styles.css'
import { Center, createTheme, Input, MantineProvider } from '@mantine/core'
import { InputBasePage } from './page-input-base'
import { InputWithPropsPage } from './page-input-with-props'
import { InputAnatonomyPage } from './page-input-anatonomy'
import { InputStylesApiPage } from './page-input-styles-api'
import { InputDataAttributePage } from './page-input-data-attribute'
import { InputStylePropsPage } from './page-input-style-props'

import styles from './app.module.css'

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
        radius: 'xl',
      },
      classNames: {
        wrapper: styles.wrapper,
      },
      styles: {
        input: {
          fontWeight: 500,
        },
      },
      vars: () => ({
        wrapper: {
          '--input-height': '56px',
          '--input-fz': '18px',
        },
      }),
    }),
  },
})

export const ComponentsStylingApp = () => {
  return (
    <MantineProvider theme={theme}>
      <Center h="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="/input-base" element={<InputBasePage />} />
            <Route path="/input-with-props" element={<InputWithPropsPage />} />
            <Route path="/input-anatonomy" element={<InputAnatonomyPage />} />
            <Route path="/input-styles-api" element={<InputStylesApiPage />} />
            <Route path="/input-data-attribute" element={<InputDataAttributePage />} />
            <Route path="/input-style-props" element={<InputStylePropsPage />} />
          </Routes>
        </BrowserRouter>
      </Center>
    </MantineProvider>
  )
}
