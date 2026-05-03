import { db } from "../../db";

export const getAllUsers = async () => {
  return db.user.findMany();
};

export const createUser = async (data: { email: string; name?: string }) => {
  return db.user.create({
    data,
  });
};
