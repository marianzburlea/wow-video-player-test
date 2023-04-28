import { Grid, VideoPlayer } from '@wowjob/ui'
import { useEffect, useState } from 'react'

const LandingPage = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return show ? (
    <div>
      <h1>Landing page for video</h1>

      <Grid gtc="repeat(4, 1fr)" padding="l" gap="l">
        <VideoPlayer videoType="youtube" videoSource="ePfadaMzzuc" />
        <VideoPlayer videoType="twitch" videoSource="1802541336" />
        <VideoPlayer videoType="vimeo" videoSource="809984914" />
        <VideoPlayer videoType="dailymotion" videoSource="x7pvoe9" />
        <VideoPlayer videoType="vimeo" videoSource="783455051" />
      </Grid>
    </div>
  ) : null
}

export default LandingPage
