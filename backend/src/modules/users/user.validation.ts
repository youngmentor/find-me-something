import { celebrate, Joi, Segments } from 'celebrate';

const usernameSchema = Joi.string()
  .trim()
  .lowercase()
  .pattern(/^[a-z0-9_]+$/)
  .min(3)
  .max(30)
  .required();

export const onboardValidation = celebrate({
  [Segments.BODY]: Joi.object({
    username: usernameSchema,
    bio: Joi.string().trim().max(280).required(),
    socialLinks: Joi.object({
      website: Joi.string().trim().uri().optional(),
      x: Joi.string().trim().uri().optional(),
      instagram: Joi.string().trim().uri().optional(),
      linkedin: Joi.string().trim().uri().optional(),
      youtube: Joi.string().trim().uri().optional(),
      tiktok: Joi.string().trim().uri().optional()
    })
      .min(1)
      .required(),
    nairaPayoutAccount: Joi.object({
      bankCode: Joi.string().trim().pattern(/^\d{3}$/).required(),
      bankName: Joi.string().trim().min(2).max(80).required(),
      accountName: Joi.string().trim().min(2).max(120).required(),
      accountNumber: Joi.string().trim().pattern(/^\d{10}$/).required()
    }).required()
  })
});

export const usernameParamValidation = celebrate({
  [Segments.PARAMS]: Joi.object({
    username: usernameSchema
  })
});
