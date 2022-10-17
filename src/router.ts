import { Router } from 'express';

import authRoute from './routes/public/authRoute';
import userRoute from './routes/public/userRoute';

import authRoutePrivated from './routes/private/authRoute';
import userRoutePrivated from './routes/private/userRoute';

import authMiddleware from './app/middlewares/authMiddleware';

const router: Router = Router();

router.use('/', authRoute);
router.use('/user', userRoute);
router.use(authMiddleware);
router.use('/', authRoutePrivated);
router.use('/user', userRoutePrivated);

export default router;
