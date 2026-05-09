import { Hono } from 'hono';
import * as handler from './handler';

const userRoutes = new Hono();

userRoutes.get('/', handler.profile);

export default userRoutes;
