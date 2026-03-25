import mongoose from 'mongoose';

import { env } from './env';

mongoose.set('strictQuery', true);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB successfully.');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error.', error);
});

const logMongoConnectionHint = (error: unknown): void => {
  const connectionError = error as NodeJS.ErrnoException;

  if (
    env.MONGODB_URI.startsWith('mongodb+srv://') &&
    connectionError.code === 'ENOTFOUND'
  ) {
    console.error(
      'MongoDB SRV lookup failed. If your MongoDB username or password contains special characters like @, :, /, or #, percent-encode them in MONGODB_URI.'
    );
  }
};

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGODB_URI);
  } catch (error) {
    logMongoConnectionHint(error);
    throw error;
  }
};

export const disconnectFromDatabase = async (): Promise<void> => {
  await mongoose.disconnect();
};
