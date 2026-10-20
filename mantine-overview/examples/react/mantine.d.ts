import type { MantineColorsTuple, DefaultMantineColor } from '@mantine/core'

type AppColors = 'brand' | DefaultMantineColor
declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<AppColors, MantineColorsTuple>
  }

  export interface MantineThemeOther {
    logoSize: string
  }
}
