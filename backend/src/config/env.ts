import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
  PORT: Joi.number().port().default(5000),
  MONGODB_URI: Joi.string().pattern(/^mongodb(\+srv)?:\/\//).required(),
  JWT_PRIVATE_KEY: Joi.string().trim().required(),
  JWT_PUBLIC_KEY: Joi.string().trim().required(),
  JWT_EXPIRES_IN: Joi.string().default('7d'),
  CORS_ORIGIN: Joi.string().default('*')
}).unknown();

const { error, value } = envSchema.validate(process.env, {
  abortEarly: false,
  convert: true
});

if (error) {
  throw new Error(`Environment configuration error: ${error.message}`);
}

type NodeEnvironment = 'development' | 'test' | 'production';

type EnvConfig = {
  NODE_ENV: NodeEnvironment;
  PORT: number;
  MONGODB_URI: string;
  JWT_PRIVATE_KEY: string;
  JWT_PUBLIC_KEY: string;
  JWT_EXPIRES_IN: string;
  CORS_ORIGIN: string;
};

export const env = value as EnvConfig;
