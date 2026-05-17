"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAllErrors = catchAllErrors;
const node_errors_1 = require("@agrippa-io/node-errors");
const node_utils_1 = require("@agrippa-io/node-utils");
async function catchAllErrors(error, request, response, next) {
    node_utils_1.Logger.error('Uncaught Error', error);
    const ServerError = error ?? new node_errors_1.ErrorServer();
    node_utils_1.Logger.error('ServerError', ServerError);
    response
        .status(ServerError?.status ?? 500)
        .send(ServerError)
        .end();
}
