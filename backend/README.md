# find-me-something backend

TypeScript + Express backend scaffold for **find-me-something**, a platform inspired by buy-me-a-coffee style creator support flows.

## Stack

- Express with TypeScript
- MongoDB with Mongoose
- Joi + Celebrate for request validation
- JWT authentication with RSA key pairs
- Environment validation with Joi

## Getting started

1. Copy `.env.example` to `.env` and update the values.
2. Generate an RSA key pair for JWT signing:

```bash
mkdir -p keys
openssl genpkey -algorithm RSA -out keys/jwt-private.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in keys/jwt-private.pem -out keys/jwt-public.pem
```
3. Install dependencies:

```bash
npm install
```

4. Start the API in development mode:

```bash
npm run dev
```

## Scripts

- `npm run dev` - start the API with file watching
- `npm run build` - compile the project to `dist`
- `npm run start` - run the compiled server
- `npm run typecheck` - run TypeScript checks without emitting files

## API docs

- `GET /docs` - interactive Swagger UI for testing endpoints in the browser
- `GET /docs.json` - raw OpenAPI specification

### Testing auth from Swagger UI

1. Open `/docs`.
2. Run `POST /api/v1/auth/register` with `fullName`, `email`, and `password`.
3. Run `POST /api/v1/auth/login` and copy the returned JWT.
4. Click `Authorize` in Swagger UI and paste the JWT value.
5. Call `PATCH /api/v1/users/onboard` to add username, bio, social links, and naira payout details.
6. Call `GET /api/v1/users/me`.

## API overview

- `GET /health` - health check
- `POST /api/v1/auth/register` - create a basic account
- `POST /api/v1/auth/login` - authenticate and receive a JWT
- `PATCH /api/v1/users/onboard` - complete the creator onboarding profile
- `GET /api/v1/users/me` - fetch the authenticated user profile
