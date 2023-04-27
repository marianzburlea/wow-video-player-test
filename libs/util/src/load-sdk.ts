import type { TVideoType } from '@wowjob/type'
import { platformList } from '@wowjob/type'

declare global {
  interface Window {
    YT: any
    Vimeo: any
    Twitch: any
    DM: any
  }
}

export const loadSDK = (videoType: TVideoType): Promise<void> =>
  new Promise((resolve) => {
    if (platformList.includes(videoType)) {
      const scriptElement = document.createElement('script')

      if (videoType === 'youtube' && !window.YT) {
        scriptElement.src = 'https://www.youtube.com/iframe_api'
      } else if (videoType === 'vimeo' && !window.Vimeo) {
        scriptElement.src = 'https://player.vimeo.com/api/player.js'
      } else if (videoType === 'twitch' && !window.Twitch) {
        scriptElement.src = 'https://player.twitch.tv/js/embed/v1.js'
      } else if (videoType === 'dailymotion' && !window.DM) {
        scriptElement.src = 'https://api.dmcdn.net/all.js'
      }

      scriptElement.onload = () => resolve()
      document.body.appendChild(scriptElement)
    }

    resolve()
  })
