import { Router } from 'express';

import { authenticate } from '../middlewares/authenticate';
import { getCurrentUser, onboardCurrentUser } from '../modules/users/user.controller';
import { onboardValidation } from '../modules/users/user.validation';

const userRouter = Router();

userRouter.patch('/onboard', authenticate, onboardValidation, onboardCurrentUser);
userRouter.get('/me', authenticate, getCurrentUser);

export { userRouter };
