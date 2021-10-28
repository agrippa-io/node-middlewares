"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfiguration = void 0;
const attachAppToRequest_1 = require("./attachAppToRequest");
const bodyParser_1 = require("./bodyParser");
const compressor_1 = require("./compressor");
const morgan_1 = require("./morgan");
__exportStar(require("./catchAllErrors"), exports);
function ServerConfiguration(app) {
    attachAppToRequest_1.attachAppToRequest(app);
    morgan_1.attachMorgan(app);
    bodyParser_1.attachBodyParser(app);
    compressor_1.attachCompressor(app);
}
exports.ServerConfiguration = ServerConfiguration;
//# sourceMappingURL=index.js.map