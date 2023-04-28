import { useCallback, useEffect, useReducer, useRef } from 'react'
import type { ChangeEvent } from 'react'
import { TGeneralVideoPlayer } from './video-player.type'
import { Aspect } from '../aspect'
import { PlayBar } from '../play-bar/play-bar'
import { initialValueMap, videoReducer } from './video-wrapper.reducer'
import {
  muteVideoAction,
  pauseVideoAction,
  playVideoAction,
  setVideoProgressAction,
  setVideoVolumeAction,
  unmuteVideoAction,
} from './video-wrapper.action'

export const VimeoPlayer = ({
  videoId,
  autoPlay = false,
  loop = false,
}: TGeneralVideoPlayer) => {
  const playerRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [{ duration, isPlaying, progress, soundOff, volume }, set] = useReducer(
    videoReducer,
    initialValueMap
  )

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

  const updateProgress = async () => {
    if (typeof playerRef.current?.getCurrentTime === 'function') {
      const progress = await playerRef.current?.getCurrentTime('absolutetime')
      const duration = await playerRef.current?.getDuration()
      set(setVideoProgressAction({ progress, duration }))
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateProgress()
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const playVideo = () => {
    playerRef.current?.play()
    set(playVideoAction())
  }

  const pauseVideo = () => {
    playerRef.current?.pause()
    set(pauseVideoAction())
  }

  const muteVideo = () => {
    playerRef.current.setVolume(0)
    set(muteVideoAction())
  }

  const unMuteVideo = () => {
    playerRef.current.setVolume((volume || 50) / 100)
    set(unmuteVideoAction())
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = +e.target.value
    set(setVideoVolumeAction({ volume }))
    playerRef.current.setVolume(volume / 100)
  }

  const handleProgress = (e: ChangeEvent<HTMLInputElement>) => {
    const progress = +e.target.value
    if (playerRef.current) {
      playerRef.current?.setCurrentTime(progress)
      set(setVideoProgressAction({ progress }))
    }
  }

  return (
    <div>
      <div>
        <Aspect aspect="16/9">
          <div id={`vimeo-player-${videoId}`} ref={containerRef} />
        </Aspect>
      </div>

      <PlayBar
        playVideo={playVideo}
        pauseVideo={pauseVideo}
        unMuteVideo={unMuteVideo}
        muteVideo={muteVideo}
        handleVolume={handleVolume}
        handleProgress={handleProgress}
        duration={duration}
        isPlaying={isPlaying}
        progress={progress}
        soundOff={soundOff}
        volume={volume}
      />
    </div>
  )
}
