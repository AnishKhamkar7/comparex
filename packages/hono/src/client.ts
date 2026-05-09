import { hc } from 'hono/client';
import type { Hono } from 'hono';

export const createHonoClient = <TApp extends Hono<any, any, any>>(
  baseUrl: string,
) => {
  return hc<TApp>(baseUrl);
};
