import { Router } from 'express';
import usersRouter from './users.js';
import bookingRouter from './bookings.js';

const router = Router();

router.use('/users/', usersRouter);
router.use('/booking', bookingRouter);

export default router;
