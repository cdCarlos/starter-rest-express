import { Router, Request, Response } from 'express';
import { requireAuth } from './auth.middleware';

const router: Router = Router();

router.get('/verify', requireAuth, async (req: Request, res: Response) => {
    return res.status(200).send({ auth: true, message: 'Authenticated.' });
});

export const AuthRouter: Router = router;
