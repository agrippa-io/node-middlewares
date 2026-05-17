"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseEscaper = responseEscaper;
const isObject_1 = __importDefault(require("lodash/isObject"));
const xss_1 = __importDefault(require("xss"));
function responseEscaper(req, res, next) {
    const oldSend = res.send;
    res.send = function (data) {
        let modifiedData = data;
        if ((0, isObject_1.default)(data)) {
            modifiedData = JSON.parse((0, xss_1.default)(JSON.stringify(data)));
        }
        res.send = oldSend;
        return res.send(modifiedData);
    };
    next();
}
