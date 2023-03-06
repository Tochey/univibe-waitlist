import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

import getUserModel from '../models/userModel';

export default async function addToWaitList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    mongoose.connect(process.env.DB_URL as string);
    const user = await getUserModel().create({ email: req.body.email });
    return res.json({ user });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
