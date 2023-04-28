import type { TVideoPlayer } from '@wowjob/type'
import { Grid, VideoPlayer } from '@wowjob/ui'
import { useEffect, useState } from 'react'

const path = '/api/video'
const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}${path}`

export const getServerSideProps = async () => {
  // grab a list of articles
  try {
    const { list, message } = await (await fetch(url)).json()

    return {
      props: {
        list,
        message,
      },
    }
  } catch (error: any) {
    console.log('erorr getServerSideProps() blog, ', error.message)
  }

  return {
    props: {
      list: [],
    },
  }
}

const LandingPage = ({ list }: { list: TVideoPlayer[] }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return show ? (
    <div>
      <h1>Landing page for video</h1>

      <Grid gtc="repeat(4, 1fr)" padding="l" gap="l">
        {list.map(({ videoSource, videoType, docid }) => (
          <VideoPlayer
            key={docid}
            videoType={videoType}
            videoSource={videoSource}
          />
        ))}
        {/* <VideoPlayer videoType="youtube" videoSource="ePfadaMzzuc" /> */}
        {/* <VideoPlayer videoType="twitch" videoSource="1802541336" /> */}
        {/* <VideoPlayer videoType="vimeo" videoSource="809984914" /> */}
        {/* <VideoPlayer videoType="dailymotion" videoSource="x7pvoe9" /> */}
        {/* <VideoPlayer videoType="vimeo" videoSource="783455051" /> */}
      </Grid>
    </div>
  ) : null
}

export default LandingPage
