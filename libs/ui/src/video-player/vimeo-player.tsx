import { useCallback, useEffect, useRef } from 'react'
import { TGeneralVideoPlayer } from './video-player.type'
import { Aspect } from '../aspect'
import { Button } from '../button'
import { PlayBar } from '../play-bar/play-bar'

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
      width: 1280,
      height: 720,
      responsive: true,
    })
  }, [videoId, autoPlay, loop])

  useEffect(() => {
    if (window.Vimeo?.Player) {
      createPlayer()
    }
  }, [createPlayer])

  const playVideo = () => {
    console.log('playVideo()')
  }

  return (
    <div>
      <div>
        <Aspect aspect="16/9">
          <div id={`vimeo-player-${videoId}`} ref={containerRef} />
        </Aspect>
      </div>

      <PlayBar playVideo={playVideo} />
    </div>
  )
}
