import express from 'express'
import isObject from 'lodash/isObject'
import xss from 'xss'

export function responseEscaper(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const oldSend = res.send

  res.send = function (data) {
    let modifiedData = data

    if (isObject(data)) {
      modifiedData = JSON.parse(xss(JSON.stringify(data)))
    }

    res.send = oldSend
    return res.send(modifiedData)
  }

  next()
}
