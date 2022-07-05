import connectDB from '../../src/middleware/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../src/Models/User';
import jwt from 'jsonwebtoken';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  const accessToken = req.headers['x-access-token'];

  switch (req.method) {
    case 'GET':
      // jwt 검증
      try {
        const result = await jwt.verify(
          accessToken as string,
          process.env.JWT_PRIVATE_KEY as string
        );

        // 검증성공

        const user = await User.findOne({
          userId: (result as jwt.JwtPayload).id,
        });

        return res.json({
          success: true,
          userInfo: {
            userId: user.userId,
          },
        });
      } catch (error) {
        // 검증실패
        return res.json({ success: false });
      }
      break;

    default:
      break;
  }
}

export default connectDB(handler);
