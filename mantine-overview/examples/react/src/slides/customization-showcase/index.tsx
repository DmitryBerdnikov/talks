import { Box, MantineProvider, SimpleGrid, Stack, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import paperTexture from '../showcase-paper.png'
import { DefaultAuthorizationForm } from './default-authorization-form'
import { CustomAuthorizationForm } from './custom-authorization-form'

export function CustomizationShowcase() {
  return (
    <MantineProvider forceColorScheme="light">
      <Box
        component="main"
        pos="relative"
        mih="100vh"
        p={{ base: 16, sm: 40 }}
        bg="#fff7e7"
        c="#242735"
        style={{ isolation: 'isolate' }}
      >
        <Box
          pos="absolute"
          inset={0}
          aria-hidden="true"
          style={{
            zIndex: -1,
            pointerEvents: 'none',
            opacity: 0.2,
            background: 'url("' + paperTexture + '") center / cover no-repeat',
          }}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={40} maw={1320} mx="auto">
          <Stack component="section" aria-labelledby="default-heading" gap={24} miw={0}>
            <Title order={3} id="default-heading" c="#202321" fw={550}>
              @mantine/core
            </Title>
            <DefaultAuthorizationForm />
          </Stack>
          <Stack component="section" aria-labelledby="custom-heading" gap={24} miw={0}>
            <Title order={3} id="custom-heading" c="#202321" fw={550}>
              Настройка темы
            </Title>
            <CustomAuthorizationForm />
          </Stack>
        </SimpleGrid>
      </Box>
    </MantineProvider>
  )
}
