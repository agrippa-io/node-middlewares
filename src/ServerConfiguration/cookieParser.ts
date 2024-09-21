import cookieParser from 'cookie-parser'
export function attachCookieParser(app) {
  app.use(cookieParser())
}
