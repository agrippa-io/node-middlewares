import bodyParser from 'body-parser'

const rawBodySaver = (request, result, buffer, encoding) => {
  if (buffer && buffer.length) {
    request.rawBody = buffer.toString(encoding || 'utf8')
  }
}

export default (app) => {
  app.use(
    bodyParser.json({
      limit: '500kb',
      verify: rawBodySaver,
    })
  )
}
