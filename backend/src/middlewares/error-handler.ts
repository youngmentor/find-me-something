import type { ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

import { AppError } from '../common/errors/app-error';

export const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      message: error.message,
      details: error.details
    });
    return;
  }

  if (error instanceof mongoose.Error.ValidationError) {
    response.status(400).json({
      message: 'Validation failed.',
      details: error.errors
    });
    return;
  }

  if ((error as { code?: number }).code === 11000) {
    response.status(409).json({
      message: 'A user with one of those values already exists.'
    });
    return;
  }

  if (error instanceof TokenExpiredError || error instanceof JsonWebTokenError) {
    response.status(401).json({
      message: 'Invalid or expired authentication token.'
    });
    return;
  }

  console.error('Unhandled application error.', error);

  response.status(500).json({
    message: 'Internal server error.'
  });
};
