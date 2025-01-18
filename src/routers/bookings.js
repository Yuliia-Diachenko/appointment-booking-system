import { Router } from "express";
import { getBookingsController,
        getBookingByIdController,
        createBookingController,
        deleteBookingController,
        upsertBookingController,
        patchBookingController
} from "../controllers/bookings.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', ctrlWrapper(getBookingsController));

router.get('/:bookingId', ctrlWrapper(getBookingByIdController));

router.post('/', ctrlWrapper(createBookingController));

router.delete('/:bookingId', ctrlWrapper(deleteBookingController));

router.put('/:bookingId', ctrlWrapper(upsertBookingController));

router.patch('/:bookingId', ctrlWrapper(patchBookingController));

export default router;
