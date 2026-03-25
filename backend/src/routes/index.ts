import { Router } from 'express';

import { authRouter } from './auth.routes';
import { userRouter } from './user.routes';

const apiRouter = Router();

apiRouter.get('/', (_request, response) => {
  response.status(200).json({
    message: 'Welcome to the find-me-something API.'
  });
});

apiRouter.use('/auth', authRouter);
apiRouter.use('/users', userRouter);

export { apiRouter };
