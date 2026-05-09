import { cors } from 'hono/cors';
import app from './hono';
import { auth } from './lib/auth';
import { authMiddleware } from './middleware/auth';
import routes from './routes';

const appRouter = app
  .get('/', (c) => {
    return c.json({ message: 'API is running' });
  })
  .get('/health', (c) => {
    return c.json({ status: 'ok' });
  })
  .use(
    '/api/*',
    cors({
      origin: 'http://localhost:5173',
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    }),
  )
  .use('/api/*', authMiddleware)
  .on(['POST', 'GET'], '/api/auth/*', (c) => {
    return auth.handler(c.req.raw);
  })
  .route('/api', routes)
  .get('/api/hello', (c) => {
    return c.json({ msg: 'Hello from server' });
  });

export type AppType = typeof appRouter;
export { appRouter as app };
