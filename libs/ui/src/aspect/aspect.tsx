import { TAspect } from './aspect.type'
import { SAspect } from './aspect.style'

export const Aspect = ({ aspect, children }: TAspect) => {
  return <SAspect $aspect={aspect}>{children}</SAspect>
}
