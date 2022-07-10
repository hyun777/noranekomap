import connectDB from '../../../src/middleware/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../src/Models/Post';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      (async () => {
        try {
          if (req.query !== undefined) {
            const result = await Post.find({ _id: id, status: 'A' });

            if (result.length === 0) {
              return res.json({
                success: false,
              });
            }

            return res.json({
              success: true,
              payload: result,
            });
          }
        } catch (error) {
          return res.json({
            success: false,
          });
        }
      })();
      break;

    case 'POST':
      break;

    default:
      break;
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export default connectDB(handler);
