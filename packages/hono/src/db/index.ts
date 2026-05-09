import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '../env';
import { PrismaClient } from '../../src/generated';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

function createPrismaClient() {
  const connectionString = env.DATABASE_URL;

  if (!connectionString) {
    throw new Error('DATABASE_URL is missing');
  }

  return new PrismaClient({
    adapter: new PrismaPg({
      connectionString,
    }),

    log: env.NODE_ENV === 'production' ? ['error'] : ['query', 'error', 'warn'],
  });
}

export const db = globalThis.prisma ?? createPrismaClient();

if (env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
