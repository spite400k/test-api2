import { NextApiRequest, NextApiResponse } from 'next'

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    console.log("test!!!!!!!")
    return res.status(200).json({test:"test"})
  
}

export default handler
