import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

import getUserModel from '../models/userModel';

export default async function getAll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  console.log(method);

  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@uv-waitlist.nzdhukp.mongodb.net/uv-waitlist?retryWrites=true&w=majority'
    );
    const userCount = await getUserModel().find({}).count();
    return res.send({ count: userCount });
  } catch (err: any) {
    return res.send({ error: err.message });
  }
}
