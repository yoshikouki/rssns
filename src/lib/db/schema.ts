import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const team = pgTable("team", {
  teamId: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  displayId: varchar("display_id", { length: 30 }).unique().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});
