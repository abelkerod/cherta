import { pgTable, serial } from "drizzle-orm/pg-core";

export const bids = pgTable("ch_bids", {
  id: serial("id").primaryKey(),
});
