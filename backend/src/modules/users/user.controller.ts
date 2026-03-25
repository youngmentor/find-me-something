import type { RequestHandler } from 'express';

import { AppError } from '../../common/errors/app-error';
import { getUserProfileById, onboardUser } from './user.service';

export const getCurrentUser: RequestHandler = async (request, response, next) => {
  try {
    if (!request.user) {
      throw new AppError(401, 'Authentication is required.');
    }

    const user = await getUserProfileById(request.user.userId);

    response.status(200).json({
      user
    });
  } catch (error) {
    next(error);
  }
};

export const onboardCurrentUser: RequestHandler = async (request, response, next) => {
  try {
    if (!request.user) {
      throw new AppError(401, 'Authentication is required.');
    }

    const user = await onboardUser(request.user.userId, request.body);

    response.status(200).json({
      message: 'User onboarded successfully.',
      user
    });
  } catch (error) {
    next(error);
  }
};
