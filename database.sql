
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

-- user table
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "roles" INTEGER NOT NULL DEFAULT 0
);

-- plants table to hold all the plants entered
-- includes user id to join with user table
-- available trade boolean will show/hide plant
CREATE TABLE "plants" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "plant_name" VARCHAR (80) NOT NULL,
    "description" VARCHAR (200) NOT NULL,
    "available_trade" BOOLEAN NOT NULL,
);

-- offered trades table
-- groups user_id/plant_id of both plants offered in the trade
-- includes accepted boolean 
CREATE TABLE "offered_trades" (
  "id" SERIAL PRIMARY KEY,
  "owner_id" INT REFERENCES "user" NOT NULL,
  "ownedplant_id" INT REFERENCES "plants" NOT NULL,
  "trader_id" INT REFERENCES "user" NOT NULL,
  "tradeplant_id" INT REFERENCES "plants" NOT NULL,
  "accepted_trade" BOOLEAN NOT NULL,
);

-- messages table
CREATE TABLE "messages" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "sender_id" INT REFERENCES "user" NOT NULL,
    "message" VARCHAR (200) NOT NULL,
    "read" BOOLEAN NOT NULL,
);