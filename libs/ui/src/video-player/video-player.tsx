import { useEffect, useState } from 'react'
import type { TVideoPlayer } from './video-player.type'
import { loadSDK } from '@wowjob/util'

export const VideoPlayer = ({ videoSource, videoType }: TVideoPlayer) => {
  const [sdkLoaded, setSdkLoaded] = useState<boolean>(false)

  useEffect(() => {
    const loadSDKApi = async () => {
      await loadSDK(videoType)
      setSdkLoaded(true)
    }

    loadSDKApi()
  }, [videoType])

  if (sdkLoaded) {
    switch (videoType) {
      case 'youtube':
        return <div>youtube player</div>

      case 'vimeo':
        return <div>vimeo player</div>

      case 'twitch':
        return <div>twitch player</div>

      case 'dailymotion':
        return <div>dailymotion player</div>

      default:
        return null
    }
  }

  return <div>Loading ...</div>
}
