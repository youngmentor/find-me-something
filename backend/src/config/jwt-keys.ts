import { env } from './env';

const normalizePemKey = (keyValue: string, envName: string): string => {
  const normalizedKey = keyValue.replace(/\\n/g, '\n').trim();

  if (!normalizedKey.includes('BEGIN') || !normalizedKey.includes('KEY')) {
    throw new Error(`${envName} does not contain a valid PEM key.`);
  }

  return normalizedKey;
};

export const jwtPrivateKey = normalizePemKey(env.JWT_PRIVATE_KEY, 'JWT_PRIVATE_KEY');
export const jwtPublicKey = normalizePemKey(env.JWT_PUBLIC_KEY, 'JWT_PUBLIC_KEY');
