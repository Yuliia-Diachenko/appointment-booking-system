import { getAllBookings, getBookingById, createBooking, deleteBooking, updateBooking } from "../services/bookings.js";
import createHttpError from 'http-errors';

export const getBookingsController = async (req, res) => {

    const bookings = await getAllBookings();

    res.json({
      status: 200,
      message: 'Successfully found bookings!',
      data: bookings,
    });
  };

  export const getBookingByIdController = async (req, res) => {
    const { bookingId } = req.params;
    const booking = await getBookingById(userId);

    if (!booking) {
      throw createHttpError('Booking not found');
    }

    res.json({
      status: 200,
      message: `Successfully found booking with id ${bookingId}!`,
      data: booking,
    });
  };

  export const createBookingController = async (req, res) => {
    const booking = await createBooking(req.body);

    res.status(201).json({
      status: 201,
      message: `Successfully created a booking!`,
      data: booking,
  });
  };

  export const deleteBookingController = async (req, res) => {
    const { bookingId } = req.params;
    const booking = await deleteBooking(bookingId);

    if (!booking) {
      next(createHttpError(404, 'Booking not found'));
      return;
    }

    res.status(204).send();
  };

  export const upsertBookingController = async (req, res) => {
    const { bookingId } = req.params;
    const result = await updateBooking(bookingId, req.body, {
      upsert: true,
    });

    if (!result) {
      next(createHttpError(404, 'Booking not found'));
      return;
    }

    const status = result.isNew ? 201 : 200;

    res.status(status).json({
      status,
      message: `Successfully upserted a booking!`,
      data: result.booking,
    });
  };

  export const patchBookingController = async (req, res) => {

    const { bookingId } = req.params;
    const result = await updateBooking(bookingId, req.body);

  if (!result) {
    next(createHttpError(404, 'Booking not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a booking!`,
    data: result.booking,
  });
  };

