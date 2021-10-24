import express from 'express'

import ErrorServer from '@agrippa-io/node-errors/src/ErrorServer'
import ErrorAPI from '@agrippa-io/node-errors/src/ErrorAPI'
import { Logger } from '@agrippa-io/node-utils/src'

export default async (
  error: ErrorAPI,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
): Promise<void> => {
  Logger.error('Uncaught Error', error)
  const ServerError = error ?? new ErrorServer()

  response.status(ServerError.status).send(ServerError).end()
}
