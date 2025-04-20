import { eq } from "drizzle-orm";
import { type NextAuthConfig } from "next-auth";
import { createTeamForUser } from "@/features/teams/team";
import { db } from "@/lib/db";
import { teamMembership } from "@/lib/db/schema";

export const authEvents: Partial<NextAuthConfig["events"]> = {
  signIn: async ({ user }: { user: { id?: string; name?: string | null } }) => {
    if (!user?.id) return;

    // Check if user has a team already by querying team memberships
    const existingTeams = await db.query.teamMembership.findMany({
      where: eq(teamMembership.userId, user.id),
    });

    // If user has no teams, create one
    if (!existingTeams || existingTeams.length === 0) {
      try {
        await createTeamForUser(user.id, user.name || null);
        console.log(`Created team for user ${user.id}`);
      } catch (error) {
        console.error("Failed to create team for user:", error);
      }
    }
  },
};
