CREATE TABLE IF NOT EXISTS "team" (
	"team_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"display_id" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "team_display_id_unique" UNIQUE("display_id")
);
