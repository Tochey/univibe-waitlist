import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

import getUserModel from '../models/userModel';

export default async function addToWaitList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    mongoose.connect(
      'mongodb+srv://admin:admin@uv-waitlist.nzdhukp.mongodb.net/uv-waitlist?retryWrites=true&w=majority'
    );
    const user = await getUserModel().create({ email: req.body.email });
    return res.json({ user });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
