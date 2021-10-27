"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachMorgan = void 0;
const morgan_1 = __importDefault(require("morgan"));
morgan_1.default.token('remote-addr', (request) => {
    if (request.headers['x-forwarded-for'])
        return request.headers['x-forwarded-for'].split(', ')[0];
    return request.connection.remoteAddress;
});
const defaultSkip = (request, result) => request.method === 'OPTIONS';
function attachMorgan(app, skip = defaultSkip) {
    app.use(morgan_1.default('combined', {
        skip,
    }));
}
exports.attachMorgan = attachMorgan;
//# sourceMappingURL=morgan.js.map