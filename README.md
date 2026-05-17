# @agrippa-io/node-middlewares

Shared Express middleware for Agrippa Node.js services.

- **`Security`** — `xss`-based request/response escaping.
- **`ServerConfiguration`** — composable middleware setup: body-parser,
  cookie-parser, compression, morgan logging, a catch-all error handler, and
  `attachAppToRequest`.

## Usage

```ts
import { ServerConfiguration } from '@agrippa-io/node-middlewares'
```

`express` is a **peer dependency** — the consuming service provides it.

## Conventions

Standard `node-service-template` setup: CommonJS, `strict` type-checking,
`src/*` path aliases (`tsc-alias`), ESLint flat config, Vitest.

## Scripts

```bash
npm run build       # tsc + tsc-alias -> dist/
npm test            # vitest
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```
