"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachBodyParser = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const rawBodySaver = (request, result, buffer, encoding) => {
    if (buffer && buffer.length) {
        request.rawBody = buffer.toString(encoding || 'utf8');
    }
};
function attachBodyParser(app, verify = rawBodySaver) {
    app.use(body_parser_1.default.json({
        limit: '500kb',
        verify,
    }));
}
exports.attachBodyParser = attachBodyParser;
//# sourceMappingURL=bodyParser.js.map