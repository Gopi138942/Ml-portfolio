import { type Config } from "drizzle-kit";

export default {
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: ["!session"],
} satisfies Config;