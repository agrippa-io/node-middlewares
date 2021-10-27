"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachAppToRequest = void 0;
function attachAppToRequest(app) {
    app.use(function (req, res, next) {
        req.app = app;
        next();
    });
}
exports.attachAppToRequest = attachAppToRequest;
//# sourceMappingURL=attachAppToRequest.js.map