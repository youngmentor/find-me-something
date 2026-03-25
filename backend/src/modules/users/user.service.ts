import { AppError } from '../../common/errors/app-error';
import {
  type IUser,
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

interface PublicDonationStatus {
  username: string;
  isOnboarded: boolean;
  isReadyToAcceptDonations: boolean;
}

const hasAtLeastOneSocialLink = (socialLinks: SocialLinks | undefined): boolean =>
  Object.values(socialLinks ?? {}).some(
    (link) => typeof link === 'string' && link.trim().length > 0
  );

const hasValidNairaPayoutAccount = (
  payoutAccount: NairaPayoutAccount | undefined
): payoutAccount is NairaPayoutAccount =>
  Boolean(
    payoutAccount?.bankCode?.trim() &&
      payoutAccount.bankName?.trim() &&
      payoutAccount.accountName?.trim() &&
      payoutAccount.accountNumber?.trim()
  );

const computeDonationReadiness = (
  user: Pick<IUser, 'username' | 'meta'>
): boolean =>
  Boolean(user.username?.trim()) &&
  hasAtLeastOneSocialLink(user.meta.socialLinks) &&
  hasValidNairaPayoutAccount(user.meta.nairaPayoutAccount);

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
    meta: {
      socialLinks: input.socialLinks,
      nairaPayoutAccount: input.nairaPayoutAccount
    }
  });

  user.isOnboarded = computeDonationReadiness(user);

  await user.save();

  return user;
};

export const getPublicDonationStatusByUsername = async (
  username: string
): Promise<PublicDonationStatus> => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new AppError(404, 'User not found.');
  }

  const isReadyToAcceptDonations = computeDonationReadiness(user);

  return {
    username: user.username ?? username,
    isOnboarded: isReadyToAcceptDonations,
    isReadyToAcceptDonations
  };
};
