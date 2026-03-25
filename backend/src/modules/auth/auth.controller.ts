import type { RequestHandler } from 'express';

import { loginUser, registerUser } from './auth.service';

export const register: RequestHandler = async (request, response, next) => {
  try {
    const user = await registerUser(request.body);

    response.status(201).json({
      message: 'User registered successfully.',
      user
    });
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler = async (request, response, next) => {
  try {
    const result = await loginUser(request.body);

    response.status(200).json({
      message: 'Login successful.',
      token: result.token,
      user: result.user
    });
  } catch (error) {
    next(error);
  }
};
