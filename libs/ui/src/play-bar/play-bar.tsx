import { Button } from '../button'
import { SPlayBar } from './play-bar.style'
import type { TPlayBar } from './play-bar.type'

export const PlayBar = ({ mute, handlePlay }: TPlayBar) => {
  return (
    <SPlayBar>
      <Button icon="play" click={handlePlay} />
      <Button icon="pause" click={handlePlay} />

      <Button icon="volume" click={handlePlay} />
      <Button icon="mute" click={handlePlay} />
    </SPlayBar>
  )
}
