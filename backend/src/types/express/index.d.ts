import type { AuthenticatedRequestUser } from '../../common/types/auth';

declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedRequestUser;
    }
  }
}

export {};
