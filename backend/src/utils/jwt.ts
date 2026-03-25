import jwt from 'jsonwebtoken';

import type { AccessTokenPayload, AuthenticatedRequestUser } from '../common/types/auth';
import { env } from '../config/env';
import { jwtPrivateKey, jwtPublicKey } from '../config/jwt-keys';
import type { UserDocument } from '../models/User';

export const signAccessToken = (user: UserDocument): string =>
  jwt.sign(
    { email: user.email },
    jwtPrivateKey,
    {
      algorithm: 'RS256',
      subject: user._id.toString(),
      expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn']
    }
  );

export const verifyAccessToken = (token: string): AuthenticatedRequestUser => {
  const payload = jwt.verify(token, jwtPublicKey, {
    algorithms: ['RS256']
  }) as AccessTokenPayload;

  return {
    userId: payload.sub,
    email: payload.email
  };
};
