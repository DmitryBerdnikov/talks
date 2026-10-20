import { Input } from '@mantine/core'
import styles from './page-input-styles-api.module.css'

export function InputStylesApiPage() {
  return (
    <Input.Wrapper
      label="Email"
      description="Введите email"

      classNames={{
        root: styles.root,
        label: styles.label,
      }}
      styles={{
        description: { color: '#868e96' },
      }}
    >
      <Input
        placeholder="name@company.ru"
        vars={() => ({
          wrapper: {
            '--input-height': '60px',
          },
        })}
      />
    </Input.Wrapper>
  )
}
