import {attachAppToRequest} from './attachAppToRequest'
import {attachMorgan} from './morgan'
import {attachBodyParser} from './bodyParser'
import {attachCompressor} from './compressor'
import {attachCookieParser} from './cookieParser'

export function ServerConfiguration(app) {
  attachAppToRequest(app)
  attachMorgan(app)
  attachBodyParser(app)
  attachCompressor(app)
  attachCookieParser(app)
}
