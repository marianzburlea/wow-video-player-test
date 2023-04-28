import styled from 'styled-components'

import type { $TGrid } from './grid.type'
import {
  getGap,
  getGridTemplateColumns,
  getGridTemplateRows,
  getPadding,
} from '@wowjob/util'

export const SGrid = styled.div<$TGrid>`
  display: grid;

  ${getGap}
  ${getPadding}
  
  @media screen and (min-width: 1024px) {
    ${getGridTemplateColumns}
    ${getGridTemplateRows}
  }
`
