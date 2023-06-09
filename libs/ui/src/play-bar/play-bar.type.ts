import type { ChangeEvent, MouseEvent, KeyboardEvent } from 'react'

type clickType = (
  e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
) => void
type changeType = (e: ChangeEvent<HTMLInputElement>) => void

export type TPlayBar = {
  progress?: number
  duration?: number
  volume?: number
  isPlaying?: boolean
  soundOff?: boolean

  playVideo?: clickType
  pauseVideo?: clickType
  muteVideo?: clickType
  unMuteVideo?: clickType
  handleProgress?: changeType
  handleVolume?: changeType
}
