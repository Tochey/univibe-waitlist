import mongoose from 'mongoose';
import { NextApiResponse } from 'next';

import getUserModel from '../models/userModel';

export default async function getAll(res: NextApiResponse) {
  try {
    mongoose.connect(process.env.DB_URL as string);
    const userCount = await getUserModel().find({}).count();
    return res.json({ count: userCount });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
