import express from 'express'

import { ErrorAPI, ErrorServer } from '@agrippa-io/node-errors'
import { Logger } from '@agrippa-io/node-utils'

export async function catchAllErrors(
  error: ErrorAPI,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
): Promise<void> {
  Logger.error('Uncaught Error', error)
  const ServerError = error ?? new ErrorServer()

  response.status(ServerError.status).send(ServerError).end()
}
