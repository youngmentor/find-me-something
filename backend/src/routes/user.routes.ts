import { Router } from 'express';

import { authenticate } from '../middlewares/authenticate';
import {
  getCurrentUser,
  getPublicDonationStatus,
  onboardCurrentUser
} from '../modules/users/user.controller';
import {
  onboardValidation,
  usernameParamValidation
} from '../modules/users/user.validation';

const userRouter = Router();

userRouter.get('/:username/donation-status', usernameParamValidation, getPublicDonationStatus);
userRouter.patch('/onboard', authenticate, onboardValidation, onboardCurrentUser);
userRouter.get('/me', authenticate, getCurrentUser);

export { userRouter };
