import { successResponse } from "../../utils/response";
import * as userService from "./service";
import { AppError } from "../../utils/app-error";
import type { AppContext } from "../../hono/context";

export const getUsersHandler = async (c: AppContext) => {
  const users = await userService.getAllUsers();
  return successResponse(c, "Users fetched", users);
};

export const createUserHandler = async (c: AppContext) => {
  const body = await c.req.json();

  if (!body.email) {
    throw new AppError("Email is required", 400);
  }

  const user = await userService.createUser(body);

  return successResponse(c, "User created", user, 201);
};
