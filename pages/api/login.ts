import connectDB from '../../src/middleware/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../src/Models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  switch (req.method) {
    case 'POST':
      try {
        (async () => {
          // search ID
          const user = await User.findOne({ userId: body.id });

          // when ID doesn't exist
          if (user === null) return res.json({ success: false });

          // confirm password
          const isValidPassword = await bcrypt.compare(
            body.password,
            user.password
          );

          // when not valid password
          if (!isValidPassword) return res.json({ success: false });

          // everything is ok -> generate JWT
          const accessToken = jwt.sign(
            { id: user.userId },
            process.env.JWT_PRIVATE_KEY as string,
            { expiresIn: '1h' }
          );

          const refreshToken = jwt.sign(
            { id: user.userId },
            process.env.JWT_PRIVATE_KEY as string,
            { expiresIn: '14d' }
          );

          // save refreshToken to DB
          user.refreshToken = refreshToken;
          await user.save();

          // res success with tokens
          return res.json({
            success: true,
            payload: {
              accessToken,
              refreshToken,
            },
          });
        })();
      } catch (error) {}
      break;

    default:
      break;
  }
}

export default connectDB(handler);
