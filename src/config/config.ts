export const AppConfig: any = {
    EXECUTION_MODE: process.env.NODE_ENV || 'production',
    PORT: process.env.PORT || 8080,
    LOG_LEVEL: process.env.LOG_LEVEL || 'common',
    cors: {
        HOST: process.env.CORS_HOST || 'localhost',
        PORT: process.env.CORS_PORT || 8100,
        HEADERS:
            process.env.CORS_HEADERS ||
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }
};
