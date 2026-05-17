"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfiguration = ServerConfiguration;
const attachAppToRequest_1 = require("../ServerConfiguration/attachAppToRequest");
const morgan_1 = require("../ServerConfiguration/morgan");
const bodyParser_1 = require("../ServerConfiguration/bodyParser");
const compressor_1 = require("../ServerConfiguration/compressor");
const cookieParser_1 = require("../ServerConfiguration/cookieParser");
function ServerConfiguration(app) {
    (0, attachAppToRequest_1.attachAppToRequest)(app);
    (0, morgan_1.attachMorgan)(app);
    (0, bodyParser_1.attachBodyParser)(app);
    (0, compressor_1.attachCompressor)(app);
    (0, cookieParser_1.attachCookieParser)(app);
}
