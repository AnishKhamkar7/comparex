import { Hono } from 'hono';
import type { Env } from 'hono';

export const createHonoApp = <TEnv extends Env>() => {
  return new Hono<TEnv>();
};
