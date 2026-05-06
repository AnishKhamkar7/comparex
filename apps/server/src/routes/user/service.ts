import { db } from '../../db';

export const getAllUsers = async () => {
  return db.user.findMany();
};
