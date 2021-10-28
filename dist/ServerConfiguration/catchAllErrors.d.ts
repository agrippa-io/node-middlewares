import express from 'express';
import { ErrorAPI } from '@agrippa-io/node-errors';
export declare function catchAllErrors(error: ErrorAPI, request: express.Request, response: express.Response, next: express.NextFunction): Promise<void>;
