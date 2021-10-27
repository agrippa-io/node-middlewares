"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAllErrors = void 0;
const ErrorServer_1 = __importDefault(require("@agrippa-io/node-errors/src/ErrorServer"));
const src_1 = require("@agrippa-io/node-utils/src");
function catchAllErrors(error, request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        src_1.Logger.error('Uncaught Error', error);
        const ServerError = error !== null && error !== void 0 ? error : new ErrorServer_1.default();
        response.status(ServerError.status).send(ServerError).end();
    });
}
exports.catchAllErrors = catchAllErrors;
//# sourceMappingURL=catchAllErrors.js.map