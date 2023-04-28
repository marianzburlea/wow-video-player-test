import type { TButtonType, TIconType } from '@wowjob/type'
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'

type disabled = boolean

export type TButton = {
  children?: ReactNode
  disabled?: disabled
  click?: (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void
  type?: TButtonType
  label?: string
  name?: string
  icon: TIconType
}

// only custom properties that don't exist by defaul on the native element
export type $TButton = {
  name?: string
  type?: TButtonType
}
