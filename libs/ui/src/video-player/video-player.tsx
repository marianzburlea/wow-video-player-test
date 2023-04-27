import { useEffect, useState } from 'react'
import type { TVideoPlayer } from './video-player.type'
import { loadSDK } from '@wowjob/util'
import { YoutubePlayer } from './youtube-player'
import { TwitchPlayer } from './twitch-player'

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
        return <YoutubePlayer videoId={videoSource} />

      case 'vimeo':
        return <div>to be or not to be</div>

      case 'twitch':
        return <TwitchPlayer videoId={videoSource} />

      case 'dailymotion':
        return <div>dailymotion player</div>

      default:
        return null
    }
  }

  return <div>Loading ...</div>
}
