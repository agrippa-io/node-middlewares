"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.use(function (req, res, next) {
        req.app = app;
        next();
    });
};
//# sourceMappingURL=attachAppToRequest.js.map