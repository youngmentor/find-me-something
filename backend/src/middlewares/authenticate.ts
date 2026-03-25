import type { RequestHandler } from 'express';

import { AppError } from '../common/errors/app-error';
import { verifyAccessToken } from '../utils/jwt';

export const authenticate: RequestHandler = (request, _response, next) => {
  const authorizationHeader = request.header('authorization');

  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    next(new AppError(401, 'Authentication is required.'));
    return;
  }

  const token = authorizationHeader.replace('Bearer ', '').trim();

  if (!token) {
    next(new AppError(401, 'Authentication is required.'));
    return;
  }

  try {
    request.user = verifyAccessToken(token);
    next();
  } catch (error) {
    next(error);
  }
};
