import type { RequestHandler } from 'express';

import { AppError } from '../common/errors/app-error';

export const notFoundHandler: RequestHandler = (request, _response, next) => {
  next(new AppError(404, `Route ${request.method} ${request.originalUrl} was not found.`));
};
