import { Input } from '@mantine/core'
import styles from './page-input-styles-api.module.css'

export function InputDataAttributePage() {
  return (
    <Input.Wrapper label="Email">
      <Input
        placeholder="Введите email"
        classNames={{ input: styles.input }}
        variant="filled"
        error
      />
    </Input.Wrapper>
  )
}
