import { iconMap, sizeMap } from '@wowjob/type'
import styled from 'styled-components'

import type { $TIcon } from './icon.type'

const getSize = ({ $size = 'medium' }: $TIcon) => `
  width: ${sizeMap[$size].icon / 24}rem;
  height: ${sizeMap[$size].icon / 24}rem;
  `

export const SIcon = styled.span<$TIcon>`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  ${getSize}

  &::before {
    font-size: ${({ $size = 'medium' }) => sizeMap[$size].icon / 32}rem;
    content: '${({ $icon }) => iconMap[$icon]}';
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'video-player';
    /* speak: never; */
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
