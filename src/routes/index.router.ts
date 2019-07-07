import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/api/v0', async (req: Request, res: Response) => {
    res.send('V0');
});

export const IndexRouter: Router = router;
