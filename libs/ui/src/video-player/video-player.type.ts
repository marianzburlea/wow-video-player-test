import type { TVideoType } from '@wowjob/type'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export type TGeneralVideoPlayer = {
  videoId: string
  autoPlay?: boolean
  loop?: boolean
}

export type TValueType = {
  progress?: number
  duration?: number
  volume?: number
  isPlaying?: boolean
  soundOff?: boolean
}

export type TActionType = { type: string } & TValueType
