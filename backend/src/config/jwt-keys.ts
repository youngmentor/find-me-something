import { readFileSync } from 'node:fs';
import path from 'node:path';

import { env } from './env';

const readKeyFile = (filePath: string): string => {
  const absolutePath = path.resolve(process.cwd(), filePath);

  try {
    return readFileSync(absolutePath, 'utf8');
  } catch (error) {
    throw new Error(`Unable to read JWT key file at ${absolutePath}.`, {
      cause: error
    });
  }
};

export const jwtPrivateKey = readKeyFile(env.JWT_PRIVATE_KEY_PATH);
export const jwtPublicKey = readKeyFile(env.JWT_PUBLIC_KEY_PATH);
