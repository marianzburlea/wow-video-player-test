import { createGlobalStyle } from 'styled-components'

export const SReset = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html,
  body,
  #__next {
    height: 100%;
    color: black;
  }

  button {
    border: 0;
  }
  
  *,
  *::after,
  *::before {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  @media screen and (prefers-color-scheme: dark) {
    color: white;
  }
`

export const SIconFont = createGlobalStyle`
  @font-face {
    font-family: 'video-player';
    src: url('/font/video-player.ttf?vr7yb6') format('truetype'),
      url('/font/video-player.woff?vr7yb6') format('woff'),
      url('/font/video-player.svg?vr7yb6#video-player') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
`
