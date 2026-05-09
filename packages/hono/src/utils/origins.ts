import { env } from '../env';

export function parseTrustedOrigins(): string[] {
  const origins = new Set<string>([env.APP_BASE_URL]);
  const extra = env.BETTER_AUTH_TRUSTED_ORIGINS?.split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  for (const origin of extra ?? []) origins.add(origin);
  return [...origins];
}
