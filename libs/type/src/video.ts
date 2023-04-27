export const platformList = [
  'youtube',
  'vimeo',
  'twitch',
  'dailymotion',
] as const

export type TVideoType = (typeof platformList)[number]
