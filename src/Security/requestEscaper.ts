import express from 'express'
import isEmpty from 'lodash/isEmpty'
import xss from 'xss'

export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.is('application/json')) {
    req.body = JSON.parse(xss(JSON.stringify(req.body)))
  }

  if (!isEmpty(req.query)) {
    req.query = JSON.parse(xss(JSON.stringify(req.query)))
  }

  next()
}
