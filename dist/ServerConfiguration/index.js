"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfiguration = void 0;
const attachAppToRequest_1 = require("./attachAppToRequest");
const bodyParser_1 = require("./bodyParser");
const compressor_1 = require("./compressor");
const morgan_1 = require("./morgan");
function ServerConfiguration(app) {
    attachAppToRequest_1.attachAppToRequest(app);
    morgan_1.attachMorgan(app);
    bodyParser_1.attachBodyParser(app);
    compressor_1.attachCompressor(app);
}
exports.ServerConfiguration = ServerConfiguration;
//# sourceMappingURL=index.js.map