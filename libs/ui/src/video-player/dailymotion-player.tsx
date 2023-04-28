import { useCallback, useEffect, useRef } from 'react'
import { TGeneralVideoPlayer } from './video-player.type'
import { Aspect } from '../aspect'
import { PlayBar } from '../play-bar/play-bar'

export const DailymotionPlayer = ({
  videoId,
  autoPlay = false,
  loop = false,
}: TGeneralVideoPlayer) => {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const createPlayer = useCallback(() => {
    if (!containerRef.current) return

    const player = window.DM.player(containerRef.current, {
      video: videoId,
      width: '100%',
      height: '100%',
      autoplay: autoPlay,
      loop: loop,
      mute: false,
    })

    playerRef.current = player
  }, [videoId, autoPlay, loop])

  useEffect(() => {
    if (window.DM?.player) {
      setTimeout(() => {
        createPlayer()
      }, 1000)
    }
  }, [createPlayer])

  const playVideo = () => {
    console.log('playVideo()')
  }

  return (
    <div>
      <div>
        <Aspect aspect="16/9">
          <div id={`dailymotion-player-${videoId}`} ref={containerRef} />
        </Aspect>
      </div>

      <PlayBar playVideo={playVideo} />
    </div>
  )
}
