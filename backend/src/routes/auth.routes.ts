import { Router } from 'express';

import { login, register } from '../modules/auth/auth.controller';
import { loginValidation, registerValidation } from '../modules/auth/auth.validation';

const authRouter = Router();

authRouter.post('/register', registerValidation, register);
authRouter.post('/login', loginValidation, login);

export { authRouter };
