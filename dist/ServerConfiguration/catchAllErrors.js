import { ErrorServer } from '@agrippa-io/node-errors';
import { Logger } from '@agrippa-io/node-utils';
export async function catchAllErrors(error, request, response, next) {
    Logger.error('Uncaught Error', error);
    const ServerError = error ?? new ErrorServer();
    Logger.error('ServerError', ServerError);
    response
        .status(ServerError?.status ?? 500)
        .send(ServerError)
        .end();
}
//# sourceMappingURL=catchAllErrors.js.map