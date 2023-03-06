import mongoose, { Model, Schema } from 'mongoose';

interface IUser extends Document {
  email: string;
  date: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      label: 'email',
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'users' }
);
const usermodel = mongoose.models.users || mongoose.model('users', userSchema);

export default function getUserModel(): Model<IUser> {
  return usermodel;
}
