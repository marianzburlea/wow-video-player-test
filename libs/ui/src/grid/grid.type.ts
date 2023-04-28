import type { TGapType } from '@wowjob/type'
import type { ReactNode } from 'react'

export type TGrid = {
  children?: ReactNode
  gtc?: string
  gtr?: string
  gap?: TGapType
  padding?: TGapType
}

export type $TGrid = {
  children?: ReactNode
  $gtc?: string
  $gtr?: string
  $gap?: TGapType
  $padding?: TGapType
}
