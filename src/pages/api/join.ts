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
    const user = await getUserModel().create({ email: req.body.email });
    res.setHeader('Access-Control-Allow-Origin', 'https://joinunivibe.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.send({ user });
  } catch (err: any) {
    return res.send({ error: err.message });
  }
}
