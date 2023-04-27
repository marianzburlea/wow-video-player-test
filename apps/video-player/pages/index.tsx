import { VideoPlayer } from '@wowjob/ui'

const LandingPage = () => {
  return (
    <div>
      <h1>Laning page for video</h1>
      <p>Change me later</p>

      <div>
        <VideoPlayer videoType="youtube" videoSource="ma-ta" />
        {/* <VideoPlayer videoType="twitch" videoSource="ma-ta" />
        <VideoPlayer videoType="twitch" videoSource="ma-ta" />
        <VideoPlayer videoType="dailymotion" videoSource="ma-ta" /> */}
      </div>
    </div>
  )
}

export default LandingPage
