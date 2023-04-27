import type { TVideoType } from '@wowjob/type'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export type TVideoPlayer = {
  videoType: TVideoType
  videoSource: string
}

export type TGeneralVideoPlayer = {
  videoId: string
  autoPlay?: boolean
  loop?: boolean
}
