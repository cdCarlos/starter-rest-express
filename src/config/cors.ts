import { AppConfig } from './config';
import { Request, Response } from 'express';

export const AppCORS: any = function(req: Request, res: Response, next: any) {
    res.header(
        'Access-Control-Allow-Origin',
        `${AppConfig.cors.PROTOCOL}://${AppConfig.cors.HOST}:${
            AppConfig.cors.PORT
        }`
    );
    res.header('Access-Control-Allow-Headers', AppConfig.cors.CORS_HEADERS);
    next();
};
