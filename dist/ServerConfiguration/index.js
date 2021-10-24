"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const attachAppToRequest_1 = __importDefault(require("./attachAppToRequest"));
const bodyParser_1 = __importDefault(require("./bodyParser"));
const compressor_1 = __importDefault(require("./compressor"));
const morgan_1 = __importDefault(require("./morgan"));
exports.default = (app) => {
    attachAppToRequest_1.default(app);
    morgan_1.default(app);
    bodyParser_1.default(app);
    compressor_1.default(app);
};
//# sourceMappingURL=index.js.map