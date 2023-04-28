import type { MouseEvent } from 'react'

export type TPlayBar = {
  mute?: boolean
  handlePlay?: (e: MouseEvent<HTMLButtonElement>) => void
}
