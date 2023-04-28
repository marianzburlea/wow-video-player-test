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
      {!isPlaying && <Button icon="play" click={playVideo} />}
      {isPlaying && <Button icon="pause" click={pauseVideo} />}

      <input
        type="range"
        min={0}
        max={duration}
        value={progress}
        onChange={handleProgress}
        readOnly
        style={{
          width: '100%',
        }}
      />

      {!soundOff && <Button icon="volume" click={muteVideo} />}
      {soundOff && <Button icon="mute" click={unMuteVideo} />}
    </SPlayBar>
  )
}
