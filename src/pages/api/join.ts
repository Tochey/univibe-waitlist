import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

import getUserModel from '../models/userModel';

export default async function addToWaitList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@uv-waitlist.nzdhukp.mongodb.net/uv-waitlist?retryWrites=true&w=majority'
    );

    const currUser = await getUserModel().findOne({ email: req.body.email });

    if (currUser) {
      return res.status(400).send({ error: 'User already exists' });
    }

    const user = await getUserModel().create({ email: req.body.email });
    return res.status(200).send({ user });
  } catch (err: any) {
    return res.send({ error: err.message });
  }
}
