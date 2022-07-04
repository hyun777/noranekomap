import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

interface handlerAPI {
  (req: NextApiRequest, res: NextApiResponse): void;
}

const connectDB =
  (handler: handlerAPI) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (mongoose.connections[0].readyState) {
        // Use current db connection
        console.log('MongoDB is already connected...');
        return handler(req, res);
      }
      // Use new db connection

      await mongoose.connect(process.env.MONGO_URI!);
      console.log('MongoDB is newly connected...');
      return handler(req, res);
    } catch (error) {
      console.log('MongoDB connection is failed...');
    }
  };

export default connectDB;
