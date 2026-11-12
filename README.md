# @agrippa-io/node-middlewares

> [!IMPORTANT]
> **Frozen (2026-11): bug fixes only.** This package serves the Mongo-era
> services (`node-event-handler`, `node-service-project-generation`). New
> services should not depend on it. Replacement: `@agrippa-io/node-http` (error handler, validation, rate limit, request logging). See
> [shared-libs-1](https://github.com/agrippa-io/agrippa-stack/tree/develop/epics/shared-libs-1).

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
