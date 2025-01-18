import { BookingsCollection } from '../db/models/bookings.js';

export const getAllBookings = async () => {
  const bookings = await BookingsCollection.find();
  return bookings;
};

export const getBookingById = async (bookingId) => {
  const booking = await BookingsCollection.findById(bookingId);
  return booking;
};

export const createBooking = async (payload) => {
  const booking = await BookingsCollection.create(payload);
  return booking;
};

export const deleteBooking = async (bookingId) => {

    const booking = await BookingsCollection.findOneAndDelete({
      _id: bookingId,
    });

    return booking;
};

export const updateBooking = async (bookingId, payload, options = {}) => {
  const rawResult = await BookingsCollection.findOneAndUpdate(
    { _id: bookingId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    student: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
