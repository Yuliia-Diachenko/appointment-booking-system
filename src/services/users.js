import { UsersCollection } from '../db/models/users.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllUsers = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;
  const usersQuery = UsersCollection.find();
  if (filter.userType) {
    usersQuery.where('userType').equals(filter.userType);
  }

  const [ usersCount, users ] = await Promise.all([
    UsersCollection.find().merge(usersQuery).countDocuments(),
    usersQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);
  const paginationData = calculatePaginationData(usersCount, perPage, page);
  return {
    data: users,
    ...paginationData,
  }
};

export const getUserById = async (userId) => {
  const user = await UsersCollection.findById(userId);
  return user;
};

export const createUser = async (payload) => {
  const user = await UsersCollection.create(payload);
  return user;
};

export const deleteUser = async (userId) => {

    const user = await UsersCollection.findOneAndDelete({
      _id: userId,
    });

    return user;
};

export const updateUser = async (userId, payload, options = {}) => {
  const rawResult = await UsersCollection.findOneAndUpdate(
    { _id: userId },
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
