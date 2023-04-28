export const iconMap = {
  play: '\\e900',
  pause: '\\e901',
  volume: '\\e902',
  mute: '\\e903',
} as const

export type TIconType = keyof typeof iconMap
