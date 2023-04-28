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

export const DailymotionPlayer = ({
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

  const updateProgress = async () => {
    const progress = await playerRef.current?.currentTime
    const duration = await playerRef.current?.duration
    set(setVideoProgressAction({ progress, duration }))
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
    playerRef.current?.setVolume(0)
    set(muteVideoAction())
  }

  const unMuteVideo = () => {
    playerRef.current?.setVolume((volume || 100) / 100)
    set(unmuteVideoAction())
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = +e.target.value
    set(setVideoVolumeAction({ volume }))
    playerRef.current?.setVolume(volume / 100)
    console.log(Object.keys(playerRef.current))
  }

  const handleProgress = (e: ChangeEvent<HTMLInputElement>) => {
    const progress = +e.target.value
    playerRef.current?.seek(progress)
    set(setVideoProgressAction({ progress }))
  }

  return (
    <div>
      <div>
        <Aspect aspect="16/9">
          <div id={`dailymotion-player-${videoId}`} ref={containerRef} />
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
