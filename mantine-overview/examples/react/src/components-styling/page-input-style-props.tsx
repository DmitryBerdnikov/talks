import { Input } from '@mantine/core'

export function InputStylePropsPage() {
  return (
    <Input.Wrapper mt="3" label="Email" description="Доступен только gmail" error="Неверный email">
      <Input mt="10" placeholder="Введите email" error />
    </Input.Wrapper>
  )
}
