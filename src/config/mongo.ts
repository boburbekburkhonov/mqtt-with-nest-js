import mongoose, { Mongoose } from 'mongoose';

export default async (): Promise<Mongoose> =>
  await mongoose.connect('mongodb://127.0.0.1:27017/n37');
