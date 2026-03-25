import cors from 'cors';
import { errors } from 'celebrate';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import { env } from './config/env';
import { openApiSpec } from './docs/openapi';
import { errorHandler } from './middlewares/error-handler';
import { notFoundHandler } from './middlewares/not-found';
import { apiRouter } from './routes';

const app = express();

const corsOrigin =
  env.CORS_ORIGIN === '*'
    ? true
    : env.CORS_ORIGIN.split(',').map((origin) => origin.trim());

app.use(helmet());
app.use(cors({ origin: corsOrigin, credentials: true }));
app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/docs.json', (_request, response) => {
  response.status(200).json(openApiSpec);
});

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(openApiSpec, {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true
    },
    customSiteTitle: 'find-me-something API Docs'
  })
);

app.get('/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    service: 'find-me-something-api',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/v1', apiRouter);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

export { app };
