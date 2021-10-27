import morgan from 'morgan'

morgan.token('remote-addr', (request) => {
  if (request.headers['x-forwarded-for'])
    return request.headers['x-forwarded-for'].split(', ')[0]
  return request.connection.remoteAddress
})

const defaultSkip = (request, result) => request.method === 'OPTIONS'

export function attachMorgan(app, skip = defaultSkip) {
  app.use(
    morgan('combined', {
      skip,
    })
  )
}
