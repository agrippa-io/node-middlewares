export default (app) => {
  app.use(function (req, res, next) {
    req.app = app
    next()
  })
}
