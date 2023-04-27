import { useCallback, useEffect, useRef } from 'react'
import { TGeneralVideoPlayer } from './video-player.type'
import { Aspect } from '../aspect'

export const VimeoPlayer = ({
  videoId,
  autoPlay = false,
  loop = false,
}: TGeneralVideoPlayer) => {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const createPlayer = useCallback(() => {
    if (!containerRef.current) return

    playerRef.current = new window.Vimeo.Player(containerRef.current, {
      id: videoId,
      autoplay: autoPlay,
      loop: loop,
      controls: false,
      responsive: true,
    })
  }, [videoId, autoPlay, loop])

  useEffect(() => {
    if (window.Vimeo?.Player) {
      createPlayer()
    }
  }, [createPlayer])

  return (
    <Aspect aspect="16/9">
      <div id={`vimeo-player-${videoId}`} ref={containerRef} />
    </Aspect>
  )
}
