import connectDB from '../../../src/middleware/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../src/Models/Post';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  switch (req.method) {
    case 'GET':
      (async () => {
        try {
          const result = await Post.find({ status: 'A' })
            .select(
              '_id userId catName gender characteristic address created_at thumbnail lat lng'
            )
            .sort({ created_at: -1 })
            .limit(5)
            .skip(0);

          return res.json({
            success: true,
            payload: result,
          });
        } catch (error) {
          return res.json({
            success: false,
          });
        }
      })();
      break;

    case 'POST':
      try {
        const post = new Post(body);
        await post.save();
        res.json({
          success: true,
        });
      } catch (error) {
        res.json({
          success: false,
        });
      }

      break;

    // case 'DELETE':
    //   const a = await Post.remove({});

    //   res.json({
    //     a,
    //   });
    //   break;
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
