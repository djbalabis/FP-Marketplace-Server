const db = require("../config/connection");
const { Inventory, Profile } = require("../models");
const profileSeeds = require("./profileSeeds");
const inventoryData = require("./inventoryData.json");

db.once("open", async () => {
  try {
    await Profile.create(profileSeeds);
  } catch (err) {
    throw err;
  }
});

db.once("open", async () => {
  await Inventory.deleteMany({});
  const actualInventory = await Inventory.insertMany(inventoryData);
  console.log("Inventory seeded successfully.");
  process.exit(0);
});
