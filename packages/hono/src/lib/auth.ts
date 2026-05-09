import { PrismaClient } from '@prisma/client';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { env } from '../env';

const client = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(client, { provider: 'postgresql' }),
  baseURL: env.BETTER_AUTH_URL,
  emailAndPassword: { enabled: false },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});
