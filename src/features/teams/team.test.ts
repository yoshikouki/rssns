import { sql } from "drizzle-orm";
import { expect, test } from "vitest";
import { team, teamMembership, users } from "@/lib/db/schema";
import { testDb } from "@/lib/db/test";
import { createTeamForUser, getUserPrimaryTeam, getUserTeams } from "./team";

// Create test user before each test
async function createTestUser(id: string, name?: string | null) {
  await testDb.insert(users).values({
    id,
    name,
    email: `${id}@example.com`,
  });
}

test("createTeamForUser creates a team and membership with username", async () => {
  const userId = "user-1";
  const userName = "Test User";
  await createTestUser(userId, userName);

  const result = await createTeamForUser(userId, userName);

  expect(result).toBeDefined();
  expect(result.name).toBe("Test User's Team");

  // Verify team membership was created
  const memberships = await testDb
    .select()
    .from(teamMembership)
    .where(sql`${teamMembership.userId} = ${userId}`);
  expect(memberships).toHaveLength(1);
  expect(memberships[0].role).toBe("owner");
});

test("createTeamForUser creates a team and membership without username", async () => {
  const userId = "user-1";
  await createTestUser(userId);

  const result = await createTeamForUser(userId, null);

  expect(result).toBeDefined();
  expect(result.name).toBe("My Team");

  // Verify team membership was created
  const memberships = await testDb
    .select()
    .from(teamMembership)
    .where(sql`${teamMembership.userId} = ${userId}`);
  expect(memberships).toHaveLength(1);
  expect(memberships[0].role).toBe("owner");
});

test("getUserTeams returns teams with roles", async () => {
  const userId = "user-1";
  await createTestUser(userId);
  const teamData = {
    id: "team-1",
    name: "Team 1",
    displayId: "team-1",
  };

  // Create a team and membership
  await testDb.insert(team).values(teamData);
  await testDb.insert(teamMembership).values({
    teamId: teamData.id,
    userId,
    role: "owner",
  });

  const result = await getUserTeams(userId);

  expect(result).toHaveLength(1);
  expect(result[0].teamId).toBe(teamData.id);
  expect(result[0].role).toBe("owner");
});

test("getUserPrimaryTeam returns owner team first", async () => {
  const userId = "user-1";
  await createTestUser(userId);
  const ownerTeam = {
    id: "team-1",
    name: "Owner Team",
    displayId: "team-1",
  };
  const memberTeam = {
    id: "team-2",
    name: "Member Team",
    displayId: "team-2",
  };

  // Create teams and memberships
  await testDb.insert(team).values([ownerTeam, memberTeam]);
  await testDb.insert(teamMembership).values([
    { teamId: ownerTeam.id, userId, role: "owner" },
    { teamId: memberTeam.id, userId, role: "member" },
  ]);

  const result = await getUserPrimaryTeam(userId);

  expect(result).toBeDefined();
  expect(result.teamId).toBe(ownerTeam.id);
  expect(result.role).toBe("owner");
});

test("getUserPrimaryTeam returns first team when no owner team exists", async () => {
  const userId = "user-1";
  await createTestUser(userId);
  const team1 = {
    id: "team-1",
    name: "Team 1",
    displayId: "team-1",
  };
  const team2 = {
    id: "team-2",
    name: "Team 2",
    displayId: "team-2",
  };

  // Create teams and memberships
  await testDb.insert(team).values([team1, team2]);
  await testDb.insert(teamMembership).values([
    { teamId: team1.id, userId, role: "member" },
    { teamId: team2.id, userId, role: "member" },
  ]);

  const result = await getUserPrimaryTeam(userId);

  expect(result).toBeDefined();
  expect(result.teamId).toBe(team1.id);
  expect(result.role).toBe("member");
});
