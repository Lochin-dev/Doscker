import { registerAs } from '@nestjs/config';

declare interface DatabaseConfig {
  url?: string;
}

export const dbconfig = registerAs<DatabaseConfig>(
  'db',
  (): DatabaseConfig => ({
    url:
      process.env.DATABASE_URL ??
      'postgresql://postgres:Lochin2212@127.0.0.1:5433/db1',
  }),
);
