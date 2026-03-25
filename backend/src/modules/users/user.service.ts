import { AppError } from '../../common/errors/app-error';
import {
  User,
  type NairaPayoutAccount,
  type SocialLinks,
  type UserDocument
} from '../../models/User';

interface OnboardUserInput {
  username: string;
  bio: string;
  socialLinks: SocialLinks;
  nairaPayoutAccount: NairaPayoutAccount;
}

export const getUserProfileById = async (userId: string): Promise<UserDocument> => {
  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(404, 'User not found.');
  }

  return user;
};

export const onboardUser = async (
  userId: string,
  input: OnboardUserInput
): Promise<UserDocument> => {
  const existingUser = await User.findOne({
    username: input.username,
    _id: { $ne: userId }
  });

  if (existingUser) {
    throw new AppError(409, 'A user with that username already exists.');
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new AppError(404, 'User not found.');
  }

  user.set({
    username: input.username,
    bio: input.bio,
    isOnboarded: true,
    meta: {
      socialLinks: input.socialLinks,
      nairaPayoutAccount: input.nairaPayoutAccount
    }
  });

  await user.save();

  return user;
};
