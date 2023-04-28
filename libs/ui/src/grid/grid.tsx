import type { TGrid } from './grid.type'
import { SGrid } from './grid.style'

export const Grid = ({ children, gap, gtc, gtr, padding }: TGrid) => {
  return (
    <SGrid $gap={gap} $gtc={gtc} $gtr={gtr} $padding={padding}>
      {children}
    </SGrid>
  )
}
