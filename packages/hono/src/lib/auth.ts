import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { db } from '../db';
import { env } from '../env';
import { parseTrustedOrigins } from '../utils/origins';

export const auth = betterAuth({
  database: prismaAdapter(db, { provider: 'postgresql' }),
  baseURL: env.BETTER_AUTH_URL,
  emailAndPassword: { enabled: false },
  trustedOrigins: parseTrustedOrigins(),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});
