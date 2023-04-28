import type { TIcon } from './icon.type'
import { SIcon } from './icon.style'

export const Icon = ({ icon, size }: TIcon) => {
  return <SIcon data-icon $size={size} $icon={icon} />
}
