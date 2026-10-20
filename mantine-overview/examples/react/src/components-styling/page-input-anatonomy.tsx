import { Input } from '@mantine/core'

import styles from './page-input-anatonomy.module.css'

export function InputAnatonomyPage() {
  return (
    <Input.Wrapper label="Email" description="Доступен только gmail" error="Неверный email">
      <Input
        className={styles.input}
        classNames={{ input: styles.input }}
        placeholder="Введите email"
        error
      />
    </Input.Wrapper>
  )
}
