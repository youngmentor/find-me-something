import http from 'node:http';

import { app } from './app';
import { connectToDatabase, disconnectFromDatabase } from './config/database';
import { env } from './config/env';

const startServer = async (): Promise<void> => {
  await connectToDatabase();

  const server = http.createServer(app);

  const shutdown = async (signal: string): Promise<void> => {
    console.log(`${signal} received. Closing server gracefully.`);

    server.close(async (serverError) => {
      if (serverError) {
        console.error('Failed to close the HTTP server cleanly.', serverError);
        process.exit(1);
      }

      try {
        await disconnectFromDatabase();
        process.exit(0);
      } catch (databaseError) {
        console.error('Failed to close the MongoDB connection cleanly.', databaseError);
        process.exit(1);
      }
    });
  };

  process.on('SIGINT', () => {
    void shutdown('SIGINT');
  });

  process.on('SIGTERM', () => {
    void shutdown('SIGTERM');
  });

  server.listen(env.PORT, () => {
    console.log(`find-me-something API is running on port ${env.PORT}.`);
  });
};

void startServer().catch((error: unknown) => {
  console.error('Failed to start the application.', error);
  process.exit(1);
});
