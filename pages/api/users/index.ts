import connectDB from '../../../src/middleware/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../src/Models/User';
import bcrypt from 'bcrypt';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;

  switch (req.method) {
    case 'POST':
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);
        const user = new User({ userId: body.id, password: hashedPassword });
        const result = await user.save();

        return res.json({
          success: true,
          result,
        });
      } catch (error: any) {
        switch (error.code) {
          case 11000:
            // user id already exists!
            return res.json({
              success: false,
              error: 'IDduplication',
            });
            break;

          default:
            break;
        }
      }
      break;

    default:
      break;
  }
}

export default connectDB(handler);
