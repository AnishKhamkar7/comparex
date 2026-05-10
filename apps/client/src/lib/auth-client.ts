import { createAuthClient } from 'better-auth/react';

const authBaseUrl = import.meta.env.VITE_API_URL ?? window.location.origin;

export const authClient = createAuthClient({
  baseURL: authBaseUrl,
});
