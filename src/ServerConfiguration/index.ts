import attachAppToRequest from './attachAppToRequest'
import bodyParser from './bodyParser'
import compressor from './compressor'
import morgan from './morgan'

export default (app) => {
  attachAppToRequest(app)
  morgan(app)
  bodyParser(app)
  compressor(app)
}
