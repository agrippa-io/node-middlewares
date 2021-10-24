"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const shouldCompress = (request, result) => {
    if (request.headers['x-no-compression']) {
        return false;
    }
    return compression_1.default.filter(request, result);
};
exports.default = (app) => {
    app.use(compression_1.default({
        filter: shouldCompress,
        threshold: 0,
    }));
};
//# sourceMappingURL=compressor.js.map