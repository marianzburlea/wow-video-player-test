import { VideoPlayer } from '@wowjob/ui'
import { useEffect, useState } from 'react'

const LandingPage = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return show ? (
    <div>
      <h1>Landing page for video</h1>

      <div>
        <VideoPlayer videoType="youtube" videoSource="ePfadaMzzuc" />
        <VideoPlayer videoType="twitch" videoSource="1802541336" />
        <VideoPlayer videoType="vimeo" videoSource="819819044" />
        {/* <VideoPlayer videoType="dailymotion" videoSource="ma-ta" /> */}
      </div>
    </div>
  ) : null
}

export default LandingPage
