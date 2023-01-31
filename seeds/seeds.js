const db = require("../config/connection");
const { Inventory } = require("../models");

const inventoryData = require("./inventoryData.json");
db.once("open", async () => {
  await Inventory.deleteMany({});
  const actualInventory = await Inventory.insertMany(inventoryData);
  console.log("Inventory seeded successfully.");
  process.exit(0);
});
