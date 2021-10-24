"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isObject_1 = __importDefault(require("lodash/isObject"));
const xss_1 = __importDefault(require("xss"));
function default_1(req, res, next) {
    const oldSend = res.send;
    res.send = function (data) {
        let modifiedData = data;
        if (isObject_1.default(data)) {
            modifiedData = JSON.parse(xss_1.default(JSON.stringify(data)));
        }
        res.send = oldSend;
        return res.send(modifiedData);
    };
    next();
}
exports.default = default_1;
//# sourceMappingURL=responseEscaper.js.map