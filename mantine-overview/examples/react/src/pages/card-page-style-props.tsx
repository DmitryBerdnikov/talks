import { Box, Button, Stack, Text } from '@mantine/core'

export function CardPage() {
  return (
    <Stack p="xl" align="center">
      <Text fz="lg">Пример Style Props</Text>
      <Button w={140} variant="outline" mt="xs">
        Отправить
      </Button>
      sdf
      <Box w={{ md: 400 }} />
    </Stack>
  )
}
