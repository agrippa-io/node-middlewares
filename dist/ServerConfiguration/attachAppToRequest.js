export function attachAppToRequest(app) {
    app.use(function (req, res, next) {
        req.app = app;
        next();
    });
}
//# sourceMappingURL=attachAppToRequest.js.map