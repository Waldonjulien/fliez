import pg from "pg";

const db = new pg.Client(
  process.env.DATABASE_URL || "postgres://waldon@localhost:5432/filez"
);

export default db;
