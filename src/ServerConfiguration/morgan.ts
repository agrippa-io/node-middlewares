import morgan from 'morgan'
import { Application } from 'express'

morgan.token('remote-addr', (request: any) => {
  if (request.headers['x-forwarded-for'])
    return request.headers['x-forwarded-for'].split(', ')[0]
  return request.connection.remoteAddress
})

const defaultSkip = (request: any, result: any) => request.method === 'OPTIONS'

export function attachMorgan(app: Application, skip = defaultSkip) {
  app.use(
    morgan('combined', {
      skip,
    })
  )
}
