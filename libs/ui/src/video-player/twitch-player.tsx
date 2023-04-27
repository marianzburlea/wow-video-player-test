import { useCallback, useEffect, useRef } from 'react'
import type { TGeneralVideoPlayer } from './video-player.type'

export const TwitchPlayer = ({ videoId, autoPlay }: TGeneralVideoPlayer) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  const createPlayer = useCallback(() => {
    if (
      containerRef.current &&
      typeof playerRef.current?.getCurrentTime === 'undefined'
    ) {
      playerRef.current = new window.Twitch.Player(containerRef.current, {
        width: '100%',
        height: '100%',
        autoplay: autoPlay ? true : false,
        control: false,
        video: videoId,
      })
    }
  }, [videoId, autoPlay])

  useEffect(() => {
    if (window.Twitch?.Player) {
      createPlayer()
    }
  }, [createPlayer])

  return (
    <div>
      <div id={`twitch-player-${videoId}`} ref={containerRef} />
    </div>
  )
}
