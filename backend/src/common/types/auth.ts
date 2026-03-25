export interface AuthenticatedRequestUser {
  userId: string;
  email: string;
}

export interface AccessTokenPayload {
  sub: string;
  email: string;
}
