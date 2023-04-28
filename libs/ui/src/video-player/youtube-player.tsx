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

export const YoutubePlayer = ({
  videoId,
  autoPlay,
  loop,
}: TGeneralVideoPlayer) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  const [{ duration, isPlaying, progress, soundOff, volume }, set] = useReducer(
    videoReducer,
    initialValueMap
  )

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
    playerRef.current?.playVideo()
    set(playVideoAction())
  }

  const pauseVideo = () => {
    playerRef.current?.pauseVideo()
    set(pauseVideoAction())
  }

  const muteVideo = () => {
    console.log('muteVideo() button click')
    playerRef.current?.mute()
    set(muteVideoAction())
  }

  const unMuteVideo = () => {
    console.log('unMuteVideo() button click')
    playerRef.current?.unMute()
    set(unmuteVideoAction())
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const volume = +e.target.value
    set(setVideoVolumeAction({ volume }))
    playerRef.current?.setVolume(volume)
  }

  const handleProgress = (e: ChangeEvent<HTMLInputElement>) => {
    const progress = +e.target.value
    playerRef.current?.seekTo(progress)
    set(setVideoProgressAction({ progress }))
  }

  return (
    <div>
      <div>
        <Aspect aspect="16/9">
          <div id={`youtube-player-${videoId}`} ref={containerRef} />
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
