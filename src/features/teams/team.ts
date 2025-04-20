import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { team, teamMembership } from "@/lib/db/schema";
import { generateUniqueDisplayId } from "@/lib/utils";

export async function createTeamForUser(userId: string, userName: string | null) {
  // Create a new team
  const newTeam = await db
    .insert(team)
    .values({
      name: userName ? `${userName}'s Team` : "My Team",
      displayId: generateUniqueDisplayId(userName),
    })
    .returning();

  if (!newTeam || newTeam.length === 0) {
    throw new Error("Failed to create team");
  }

  // Create a team membership for the user with owner role
  await db.insert(teamMembership).values({
    teamId: newTeam[0].id,
    userId,
    role: "owner",
  });

  return newTeam[0];
}

export async function getUserTeams(userId: string) {
  return await db
    .select({
      teamId: team.id,
      teamName: team.name,
      teamDisplayId: team.displayId,
      role: teamMembership.role,
    })
    .from(team)
    .innerJoin(teamMembership, eq(team.id, teamMembership.teamId))
    .where(eq(teamMembership.userId, userId));
}

export async function getUserPrimaryTeam(userId: string) {
  const teams = await getUserTeams(userId);
  // Return the first team with owner role, or the first team if none with owner role exists
  return teams.find((team) => team.role === "owner") || teams[0];
}
