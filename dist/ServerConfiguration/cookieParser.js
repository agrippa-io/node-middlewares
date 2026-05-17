"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCookieParser = attachCookieParser;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
function attachCookieParser(app) {
    app.use((0, cookie_parser_1.default)());
}
