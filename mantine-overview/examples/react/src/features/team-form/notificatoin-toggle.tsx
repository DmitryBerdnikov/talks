import { Checkbox, CheckboxProps } from '@mantine/core'
import { useUncontrolled } from '@mantine/hooks'

type NotificationToggleProps = Omit<
  CheckboxProps,
  'value' | 'defaultValue' | 'onChange' | 'onFocus' | 'onBlur'
> & {
  value?: boolean
  defaultValue?: boolean
  onChange?: (value: boolean) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

export function NotificationToggle({
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  ...restProps
}: NotificationToggleProps) {
  const [enabled, handleChange] = useUncontrolled<boolean>({
    value,
    defaultValue,
    onChange,
    finalValue: false,
  })

  return (
    <Checkbox
      {...restProps}
      color="teal"
      mt={24}
      label="Присылать новости команды"
      description="Обновления и важные события на указанный email"
      checked={enabled}
      onChange={(event) => {
        handleChange(event.currentTarget.checked)
      }}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  )
}
