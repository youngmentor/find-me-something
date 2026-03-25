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
2. Put your RSA keys into `JWT_PRIVATE_KEY` and `JWT_PUBLIC_KEY` as PEM text with escaped newlines.

```bash
JWT_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"
JWT_PUBLIC_KEY="-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----"
```
If you already have PEM files, you can convert them into env-safe values with:

```bash
awk 'BEGIN{ORS=""} {gsub(/\r/,""); printf "%s\\n", $0}' keys/private.pem
awk 'BEGIN{ORS=""} {gsub(/\r/,""); printf "%s\\n", $0}' keys/public.pem
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
