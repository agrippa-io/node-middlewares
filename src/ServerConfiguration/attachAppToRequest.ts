import { Application, Request, Response, NextFunction } from 'express'

export function attachAppToRequest(app: Application) {
  app.use(function (req: Request, res: Response, next: NextFunction) {
    req.app = app
    next()
  })
}
