export const gapMap = {
  xs: 4,
  sm: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 32,
  big: 48,
  xbig: 64,
  xxbig: 80,
} as const

export type TGapType = keyof typeof gapMap
