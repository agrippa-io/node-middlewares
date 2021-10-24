import compression from 'compression'

const shouldCompress = (request, result) => {
  if (request.headers['x-no-compression']) {
    return false
  }

  return compression.filter(request, result)
}

export default (app) => {
  app.use(
    compression({
      filter: shouldCompress,
      threshold: 0,
    })
  )
}
