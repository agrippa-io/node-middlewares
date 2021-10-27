import bodyParser from 'body-parser'

const rawBodySaver = (request, result, buffer, encoding) => {
  if (buffer && buffer.length) {
    request.rawBody = buffer.toString(encoding || 'utf8')
  }
}

export function attachBodyParser(app, verify = rawBodySaver) {
  app.use(
    bodyParser.json({
      limit: '500kb',
      verify,
    })
  )
}
