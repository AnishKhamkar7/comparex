import { createHonoClient } from '@comparex/hono/client';
import type { AppType } from '@comparex/hono/app-type';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const client = createHonoClient<AppType>(apiBaseUrl);
