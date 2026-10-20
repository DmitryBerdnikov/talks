import { Box, factory, useProps, type BoxProps, type ElementProps } from '@mantine/core'

type StatusBadgeProps = BoxProps &
  ElementProps<'div'> & {
    active: boolean
  }

export const StatusBadge = factory<{
  props: StatusBadgeProps
  ref: HTMLDivElement
}>((_props) => {
  const { active, ref, ...props } = useProps('StatusBadge', {}, _props)

  return (
    <Box ref={ref} {...props}>
      {active ? 'Активен' : 'Неактивен'}
    </Box>
  )
})

StatusBadge.displayName = 'StatusBadge'
