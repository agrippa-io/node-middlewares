import bodyParser from 'body-parser'
import { Application } from 'express'

const rawBodySaver = (request: any, result: any, buffer: any, encoding: any) => {
  if (buffer && buffer.length) {
    request.rawBody = buffer.toString(encoding || 'utf8')
  }
}

export function attachBodyParser(app: Application, verify = rawBodySaver) {
  app.use(
    bodyParser.json({
      limit: '500kb',
      verify,
    })
  )
}
