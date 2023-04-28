import { useCallback, useEffect, useReducer, useRef } from 'react'
import type { ChangeEvent } from 'react'
import type { TGeneralVideoPlayer } from './video-player.type'
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

export const TwitchPlayer = ({ videoId, autoPlay }: TGeneralVideoPlayer) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const [{ duration, isPlaying, progress, soundOff, volume }, set] = useReducer(
    videoReducer,
    initialValueMap
  )

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

  const updateProgress = () => {
    if (typeof playerRef.current?.getCurrentTime === 'function') {
      const progress = playerRef.current?.getCurrentTime()
      const duration = playerRef.current?.getDuration()
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
    playerRef.current?.setMuted(true)
    set(muteVideoAction())
  }

  const unMuteVideo = () => {
    playerRef.current?.setMuted(false)
    set(unmuteVideoAction())
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = +e.target.value
    set(setVideoVolumeAction({ volume }))
    playerRef.current?.setVolume(volume / 100)
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
          <div id={`twitch-player-${videoId}`} ref={containerRef} />
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
