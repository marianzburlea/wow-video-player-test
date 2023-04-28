import type { TGapType } from '@wowjob/type'
import { gapMap } from '@wowjob/type'

export const getPadding = ({ $padding }: { $padding?: TGapType }) =>
  $padding ? `padding: ${gapMap[$padding] / 16}rem;` : ''
