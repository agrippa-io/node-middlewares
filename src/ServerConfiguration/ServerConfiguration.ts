import { Application } from 'express'
import {attachAppToRequest} from 'src/ServerConfiguration/attachAppToRequest'
import {attachMorgan} from 'src/ServerConfiguration/morgan'
import {attachBodyParser} from 'src/ServerConfiguration/bodyParser'
import {attachCompressor} from 'src/ServerConfiguration/compressor'
import {attachCookieParser} from 'src/ServerConfiguration/cookieParser'

export function ServerConfiguration(app: Application) {
  attachAppToRequest(app)
  attachMorgan(app)
  attachBodyParser(app)
  attachCompressor(app)
  attachCookieParser(app)
}
