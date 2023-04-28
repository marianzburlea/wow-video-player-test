import { VIDEO_CONST } from './video-wrapper.constant'
import type { TActionType, TValueType } from './video-player.type'

export const playVideoAction = (): TActionType => ({
  type: VIDEO_CONST.playVideo,
})

export const pauseVideoAction = (): TActionType => ({
  type: VIDEO_CONST.pauseVideo,
})

export const muteVideoAction = (): TActionType => ({
  type: VIDEO_CONST.muteVideo,
})

export const unmuteVideoAction = (): TActionType => ({
  type: VIDEO_CONST.unmuteVideo,
})

export const setVideoProgressAction = ({
  progress,
  duration,
}: TValueType): TActionType => ({
  type: VIDEO_CONST.setProgressAndDuration,
  progress,
  duration,
})

export const setVideoVolumeAction = ({ volume }: TValueType): TActionType => ({
  type: VIDEO_CONST.setVolume,
  volume,
})
