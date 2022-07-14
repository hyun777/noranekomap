import connectDB from '../../../../src/middleware/mongodb';
import { Post } from '../../../../src/Models/Post';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      break;

    case 'POST':
      (async () => {
        try {
          const { userId, comment } = body;

          const result = await Post.findOneAndUpdate(
            { _id: id, status: 'A' },
            { $push: { comments: { userId, comment } as any } },
            { new: true }
          ).exec();

          if (!result) {
            return res.json({
              success: false,
            });
          }

          const payload = result.comments;

          res.json({
            success: true,
            payload,
          });
        } catch (error) {
          return res.json({
            success: false,
          });
        }
      })();
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
