export const sizeMap = {
  small: { icon: 20, horizontalPadding: 14, font: 12, height: 36 },
  medium: { icon: 24, horizontalPadding: 16, font: 14, height: 40 },
  large: { icon: 32, horizontalPadding: 18, font: 16, height: 44 },
  big: { icon: 48, horizontalPadding: 20, font: 18, height: 48 },
  huge: { icon: 60, horizontalPadding: 28, font: 20, height: 60 },
} as const

export type TSizeType = keyof typeof sizeMap
