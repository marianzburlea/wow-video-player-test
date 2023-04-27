import { useCallback, useEffect, useRef } from 'react'
import type { TGeneralVideoPlayer } from './video-player.type'
import { Aspect } from '../aspect'

export const YoutubePlayer = ({
  videoId,
  autoPlay,
  loop,
}: TGeneralVideoPlayer) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  const createPlayer = useCallback(() => {
    if (containerRef.current) {
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          autoPlay: autoPlay ? 1 : 0,
          loop: loop ? 1 : 0,
          playList: loop ? videoId : undefined,
          controls: 0,
          rel: 0,
          fs: 1,
        },
      })
    }
  }, [loop, videoId, autoPlay])

  useEffect(() => {
    if (window.YT?.Player) {
      // create player in the container
      createPlayer()
    } else {
      window.onYouTubeIframeAPIReady = createPlayer
    }
  }, [createPlayer])

  return (
    <Aspect aspect="16/9">
      <div id={`video-player-${videoId}`} ref={containerRef} />
    </Aspect>
  )
}
