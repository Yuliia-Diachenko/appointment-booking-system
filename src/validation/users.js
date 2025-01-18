import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    userType: Joi.string().valid('client', 'business').required(),
    bookings: Joi.string()
  });

