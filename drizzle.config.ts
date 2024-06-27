import { env } from "@/env";
import { Config, defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./database/schema.ts",
  dialect: "postgresql",
  out: "./database/migrations/",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
} satisfies Config);
