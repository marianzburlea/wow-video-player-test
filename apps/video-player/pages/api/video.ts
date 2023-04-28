import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { listFromFire } from '../../server/firebase.server'

const video: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { body, method } = req

  switch (method) {
    case 'GET':
      return res.status(200).json({
        message: body.message || 'ar trebui sa creez',
        list: await listFromFire('video', 10),
      })

    default:
      return res.status(200).json({
        message: 'merge baaa',
      })
  }
}

export default video
