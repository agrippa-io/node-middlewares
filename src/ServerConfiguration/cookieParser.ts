import cookieParser from 'cookie-parser'
import { Application } from 'express'

export function attachCookieParser(app: Application) {
  app.use(cookieParser())
}
