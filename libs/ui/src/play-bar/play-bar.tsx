import { Button } from '../button'
import { SPlayBar } from './play-bar.style'
import type { TPlayBar } from './play-bar.type'

export const PlayBar = ({
  duration,
  handleProgress,
  handleVolume,
  isPlaying,
  muteVideo,
  pauseVideo,
  playVideo,
  progress,
  soundOff,
  unMuteVideo,
  volume,
}: TPlayBar) => {
  return (
    <SPlayBar>
      <Button
        label={`click to ${isPlaying ? 'pause' : 'play'} video`}
        icon={isPlaying ? 'pause' : 'play'}
        click={isPlaying ? pauseVideo : playVideo}
      />
      {/* {isPlaying && <Button label='click to pause video' icon="pause" click={pauseVideo} />} */}

      <input
        type="range"
        min={0}
        max={duration}
        aria-label="use"
        value={progress}
        onChange={handleProgress}
        readOnly
        style={{
          width: '100%',
        }}
      />

      <Button
        label={`click to ${soundOff ? 'unmute' : 'mute'} video`}
        icon={soundOff ? 'mute' : 'volume'}
        click={soundOff ? unMuteVideo : muteVideo}
      />
    </SPlayBar>
  )
}
