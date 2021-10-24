import morgan from 'morgan'

morgan.token('remote-addr', (request) => {
  if (request.headers['x-forwarded-for']) return request.headers['x-forwarded-for'].split(', ')[0]
  return request.connection.remoteAddress
})

export default (app) => {
  app.use(
    morgan('combined', {
      skip: (request, result) => request.method === 'OPTIONS',
    })
  )
}
