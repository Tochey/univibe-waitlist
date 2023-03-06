import mongoose from 'mongoose';
import { NextApiResponse } from 'next';

import getUserModel from '../models/userModel';

export default async function getAll(res: NextApiResponse) {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@uv-waitlist.nzdhukp.mongodb.net/uv-waitlist?retryWrites=true&w=majority'
    );
    const userCount = await getUserModel().find({}).count();
    return res.json({ count: userCount });
  } catch (err: any) {
    return res.json({ error: err.message });
  }
}
