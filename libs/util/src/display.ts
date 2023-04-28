import { gapMap } from '@wowjob/type'
import type { TGapType } from '@wowjob/type'

export const getGridTemplateColumns = ({ $gtc }: { $gtc?: string }) =>
  $gtc ? `grid-template-columns: ${$gtc};` : ''

export const getGridTemplateRows = ({ $gtr }: { $gtr?: string }) =>
  $gtr ? `grid-template-rows: ${$gtr};` : ''

export const getGap = ({ $gap }: { $gap?: TGapType }) =>
  $gap ? `gap: ${gapMap[$gap] / 16}rem;` : ''
