import { VIDEO_CONST } from './video-wrapper.constant'
import type { TActionType, TValueType } from './video-player.type'

export const initialValueMap: TValueType = {
  progress: 0,
  duration: 0,
  volume: 100,
  isPlaying: false,
  soundOff: false,
}

export const videoReducer = (
  state = initialValueMap,
  action: TActionType
): TValueType => {
  // const newState = structuredClone(state);
  const newState = { ...state }

  switch (action.type) {
    case VIDEO_CONST.setProgressAndDuration:
      newState.progress = action.progress
      if (action.duration) {
        newState.duration = action.duration
      }
      return newState

    case VIDEO_CONST.setVolume:
      newState.volume = action.volume
      return newState

    case VIDEO_CONST.playVideo:
      newState.isPlaying = true
      return newState

    case VIDEO_CONST.pauseVideo:
      newState.isPlaying = false
      return newState

    case VIDEO_CONST.muteVideo:
      newState.soundOff = true
      return newState

    case VIDEO_CONST.unmuteVideo:
      newState.soundOff = false
      return newState

    default:
      return state
  }
}
