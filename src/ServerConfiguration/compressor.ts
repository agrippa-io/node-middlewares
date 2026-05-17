import compression from 'compression'
import { Application } from 'express'

const shouldCompress = (request: any, result: any) => {
  if (request.headers['x-no-compression']) {
    return false
  }

  return compression.filter(request, result)
}

export function attachCompressor(app: Application) {
  app.use(
    compression({
      filter: shouldCompress,
      threshold: 0,
    })
  )
}
