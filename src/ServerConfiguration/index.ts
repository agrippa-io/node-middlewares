import { attachAppToRequest } from './attachAppToRequest'
import { attachBodyParser } from './bodyParser'
import { attachCompressor } from './compressor'
import { attachMorgan } from './morgan'

export * from './catchAllErrors'

export function ServerConfiguration(app) {
  attachAppToRequest(app)
  attachMorgan(app)
  attachBodyParser(app)
  attachCompressor(app)
}
