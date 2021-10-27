"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestEscaper = void 0;
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const xss_1 = __importDefault(require("xss"));
function requestEscaper(req, res, next) {
    if (req.is('application/json')) {
        req.body = JSON.parse(xss_1.default(JSON.stringify(req.body)));
    }
    if (!isEmpty_1.default(req.query)) {
        req.query = JSON.parse(xss_1.default(JSON.stringify(req.query)));
    }
    next();
}
exports.requestEscaper = requestEscaper;
//# sourceMappingURL=requestEscaper.js.map