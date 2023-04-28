import { useCallback, useEffect, useRef } from 'react'
import type { TGeneralVideoPlayer } from './video-player.type'
import { Aspect } from '../aspect'
import { PlayBar } from '../play-bar/play-bar'

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

  const handlePlay = () => {
    console.log('handlePlay()')
  }

  return (
    <div>
      <div>
        <Aspect aspect="16/9">
          <div id={`twitch-player-${videoId}`} ref={containerRef} />
        </Aspect>
      </div>

      <PlayBar handlePlay={handlePlay} />
    </div>
  )
}
