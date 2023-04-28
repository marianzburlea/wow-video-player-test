import styled, { keyframes } from 'styled-components'
import type { $TButton } from './button.type'

// inspired from https://github.com/animate-css/animate.css/search?q=swing
const swing = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 20deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -15deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 10deg) scale(1.5);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`

export const SButton = styled.button<$TButton>`
  width: 1.5rem;
  height: 1.5rem;

  &:hover > [data-icon] {
    animation: ${swing} 0.5s linear;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 0.5rem;
  transition: 250ms;
  outline: 4px solid transparent;
  cursor: pointer;
`
