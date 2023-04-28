import type { TIconType, TSizeType } from '@wowjob/type'

export type TIcon = {
  testId?: TIconType
  icon: TIconType
  size?: TSizeType
}

export type $TIcon = {
  $icon: TIconType
  $size?: TSizeType
}
