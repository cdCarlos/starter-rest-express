import { Router, Request, Response } from 'express';
import { AuthRouter } from './auth/auth.router';

const API_VERSION: string = 'v0';
const BASE_API: string = `/api/${API_VERSION}`;

const router: Router = Router();

// Authentication
router.use(`${BASE_API}/auth`, AuthRouter);

// Default
router.get(`${BASE_API}`, async (req: Request, res: Response) => {
    res.send({ api_version: API_VERSION });
});

router.get('/', async (req: Request, res: Response) => {
    res.send({ root_api: BASE_API });
});

export const IndexRouter: Router = router;
