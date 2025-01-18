import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from "../services/users.js";
import createHttpError from 'http-errors';

export const getUsersController = async (req, res) => {

    const users = await getAllUsers();

    res.json({
      status: 200,
      message: 'Successfully found users!',
      data: users,
    });
  };

  export const getUserByIdController = async (req, res) => {
    const { userId } = req.params;
    const user = await getUserById(userId);

    if (!user) {
      throw createHttpError('User not found');
    }

    res.json({
      status: 200,
      message: `Successfully found user with id ${userId}!`,
      data: user,
    });
  };

  export const createUserController = async (req, res) => {
    const user = await createUser(req.body);

    res.status(201).json({
      status: 201,
      message: `Successfully created a user!`,
      data: user,
  });
  };

  export const deleteUserController = async (req, res) => {
    const { userId } = req.params;
    const user = await deleteUser(userId);

    if (!user) {
      next(createHttpError(404, 'User not found'));
      return;
    }

    res.status(204).send();
  };

  export const upsertUserController = async (req, res) => {
    const { userId } = req.params;
    const result = await updateUser(usertId, req.body, {
      upsert: true,
    });

    if (!result) {
      next(createHttpError(404, 'User not found'));
      return;
    }

    const status = result.isNew ? 201 : 200;

    res.status(status).json({
      status,
      message: `Successfully upserted a user!`,
      data: result.user,
    });
  };

  export const patchUserController = async (req, res) => {

    const { userId } = req.params;
    const result = await updateUser(userId, req.body);

  if (!result) {
    next(createHttpError(404, 'User not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a user!`,
    data: result.user,
  });
  };

