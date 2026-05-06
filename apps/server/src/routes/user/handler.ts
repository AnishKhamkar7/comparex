import { successResponse } from '../../utils/response';
import * as userService from './service';
import type { AppContext } from '../../hono/context';

export const getUsersHandler = async (c: AppContext) => {
  const users = await userService.getAllUsers();
  return successResponse(c, 'Users fetched', users);
};
