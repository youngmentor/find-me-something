import { Schema, model, type HydratedDocument } from 'mongoose';

export interface SocialLinks {
  website?: string;
  x?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  tiktok?: string;
}

export interface NairaPayoutAccount {
  bankCode: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export interface UserMeta {
  socialLinks: SocialLinks;
  nairaPayoutAccount?: NairaPayoutAccount;
}

export interface IUser {
  fullName: string;
  email: string;
  passwordHash: string;
  username?: string;
  bio: string;
  isOnboarded: boolean;
  meta: UserMeta;
  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<IUser>;

const socialLinksSchema = new Schema<SocialLinks>(
  {
    website: {
      type: String,
      trim: true
    },
    x: {
      type: String,
      trim: true
    },
    instagram: {
      type: String,
      trim: true
    },
    linkedin: {
      type: String,
      trim: true
    },
    youtube: {
      type: String,
      trim: true
    },
    tiktok: {
      type: String,
      trim: true
    }
  },
  {
    _id: false
  }
);

const nairaPayoutAccountSchema = new Schema<NairaPayoutAccount>(
  {
    bankCode: {
      type: String,
      required: true,
      trim: true,
      match: /^\d{3}$/
    },
    bankName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80
    },
    accountName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 120
    },
    accountNumber: {
      type: String,
      required: true,
      trim: true,
      match: /^\d{10}$/
    }
  },
  {
    _id: false
  }
);

const userMetaSchema = new Schema<UserMeta>(
  {
    socialLinks: {
      type: socialLinksSchema,
      default: () => ({})
    },
    nairaPayoutAccount: {
      type: nairaPayoutAccountSchema,
      required: false
    }
  },
  {
    _id: false
  }
);

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 30,
      match: /^[a-z0-9_]+$/
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    passwordHash: {
      type: String,
      required: true,
      select: false
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 280,
      default: ''
    },
    isOnboarded: {
      type: Boolean,
      default: false
    },
    meta: {
      type: userMetaSchema,
      default: () => ({
        socialLinks: {}
      })
    }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: (_document, returnedObject) => {
        const serializedUser = returnedObject as {
          _id: { toString(): string };
          id?: string;
          passwordHash?: string;
        };

        serializedUser.id = serializedUser._id.toString();
        Reflect.deleteProperty(serializedUser, '_id');
        Reflect.deleteProperty(serializedUser, 'passwordHash');
      }
    }
  }
);

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true, sparse: true });

export const User = model<IUser>('User', userSchema);
