import bcrypt from 'bcryptjs';

import { AppError } from '../../common/errors/app-error';
import { User, type UserDocument } from '../../models/User';
import { signAccessToken } from '../../utils/jwt';

interface RegisterUserInput {
  fullName: string;
  email: string;
  password: string;
}

interface LoginUserInput {
  email: string;
  password: string;
}

interface LoginUserResult {
  token: string;
  user: UserDocument;
}

export const registerUser = async (input: RegisterUserInput): Promise<UserDocument> => {
  const existingUser = await User.findOne({ email: input.email });

  if (existingUser) {
    throw new AppError(409, 'A user with that email already exists.');
  }

  const passwordHash = await bcrypt.hash(input.password, 12);

  return User.create({
    fullName: input.fullName,
    email: input.email,
    passwordHash,
    bio: '',
    meta: {
      socialLinks: {}
    }
  });
};

export const loginUser = async (input: LoginUserInput): Promise<LoginUserResult> => {
  const user = await User.findOne({ email: input.email }).select('+passwordHash');

  if (!user?.passwordHash) {
    throw new AppError(401, 'Invalid email or password.');
  }

  const passwordMatches = await bcrypt.compare(input.password, user.passwordHash);

  if (!passwordMatches) {
    throw new AppError(401, 'Invalid email or password.');
  }

  const token = signAccessToken(user);

  return { token, user };
};
