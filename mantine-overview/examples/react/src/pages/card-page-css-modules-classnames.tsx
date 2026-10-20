import { Box, Button, Title } from '@mantine/core'
import styles from './card-page.module.css'

export function CardPage() {
  return (
    <Box className={styles.group}>
      <Title className={styles.title} order={3}>
        Пример CSS Modules
      </Title>

      <Button className={styles.button} size="xs">
        Button
      </Button>
    </Box>
  )
}
