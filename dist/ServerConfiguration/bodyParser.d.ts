import { Application } from 'express';
export declare function attachBodyParser(app: Application, verify?: (request: any, result: any, buffer: any, encoding: any) => void): void;
