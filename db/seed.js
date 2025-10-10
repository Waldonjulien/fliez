import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  for (let i = 0; i < 5; i++){

    const filez = {
      name: `file${i}.txt`, 

  }
}
