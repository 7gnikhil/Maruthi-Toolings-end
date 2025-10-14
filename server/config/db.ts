
import mongoose from 'mongoose';
// FIX: Explicitly import `exit` to resolve typing error for `process.exit`.
import { exit } from 'process';

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
        console.error('Error: MONGO_URI is not defined in your environment variables.');
        exit(1);
    }
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB:`, error);
    exit(1);
  }
};
