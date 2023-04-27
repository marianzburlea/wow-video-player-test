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

export const loadSDK = (videoType: TVideoType): Promise<void> => {
  return new Promise((resolve) => {
    switch (videoType) {
      case 'youtube':
        if (!window.YT) {
          const script = document.createElement('script')
          script.src = 'https://www.youtube.com/iframe_api'
          script.onload = () => resolve()
          document.body.appendChild(script)
        } else {
          resolve()
        }
        break
      case 'vimeo':
        if (!window.Vimeo) {
          const script = document.createElement('script')
          script.src = 'https://player.vimeo.com/api/player.js'
          script.onload = () => resolve()
          document.body.appendChild(script)
        } else {
          resolve()
        }
        break
      case 'twitch':
        if (!window.Twitch) {
          const script = document.createElement('script')
          script.src = 'http://player.twitch.tv/js/embed/v1.js'
          script.onload = () => resolve()
          document.body.appendChild(script)
        } else {
          resolve()
        }
        break
      case 'dailymotion':
        if (!window.DM) {
          const script = document.createElement('script')
          script.src = 'https://api.dmcdn.net/all.js'
          script.onload = () => resolve()
          document.body.appendChild(script)
        } else {
          resolve()
        }
        break
      default:
        resolve()
        break
    }
  })
}
