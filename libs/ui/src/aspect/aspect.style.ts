import styled from 'styled-components'
import type { $TAspect } from './aspect.type'
import { getAspect } from '@wowjob/util'

export const SAspect = styled.div<$TAspect>`
  width: 100%;
  height: 100%;
  display: grid;
  position: relative;

  ${getAspect}

  & div {
    position: absolute;
    inset: 0;
  }

  & iframe {
    position: absolute;
    inset: 0;
  }
`
