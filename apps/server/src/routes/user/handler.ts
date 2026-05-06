import { errorResponse, successResponse } from '../../utils/response';
import * as userService from './service';
import type { AppContext } from '../../hono/context';

export const profile = async (c: AppContext) => {
  const user = c.get('user');

  if (!user) {
    return errorResponse(c, 'Unauthorized', null, 401);
  }

  return successResponse(c, 'User profile retrieved successfully', user);
};
