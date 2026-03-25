import { celebrate, Joi, Segments } from 'celebrate';

export const registerValidation = celebrate({
  [Segments.BODY]: Joi.object({
    fullName: Joi.string().trim().min(2).max(80).required(),
    email: Joi.string().trim().lowercase().email().required(),
    password: Joi.string().min(8).max(128).required()
  })
});

export const loginValidation = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().trim().lowercase().email().required(),
    password: Joi.string().min(8).max(128).required()
  })
});
