"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachAppToRequest = attachAppToRequest;
function attachAppToRequest(app) {
    app.use(function (req, res, next) {
        req.app = app;
        next();
    });
}
