import { app, env } from '@comparex/hono';

export default {
  port: env.PORT,
  fetch: app.fetch,
};
