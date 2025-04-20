import { team, teamMembership } from "./schema";

export type Team = typeof team.$inferSelect;
export type TeamInsert = typeof team.$inferInsert;
export type TeamMembership = typeof teamMembership.$inferSelect;
export type TeamMembershipInsert = typeof teamMembership.$inferInsert;
