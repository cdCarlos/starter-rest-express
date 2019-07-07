import express from 'express';
import bodyParser from 'body-parser';
const logger = require('morgan');

import { AppConfig } from './config/config';
import { AppCORS } from './config/cors';
import { IndexRouter } from './routes/index.router';

(async () => {
    console.log('Execution Environment: ', AppConfig.EXECUTION_MODE);

    const app = express();
    const port = AppConfig.PORT;

    // Middleware
    app.use(logger(AppConfig.LOG_LEVEL));
    app.use(bodyParser.json());

    //CORS
    app.use(AppCORS);

    // Routes
    app.use('/', IndexRouter);

    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();
