const { Schema, model } = require("mongoose");
const Category = require("./Category");

const invSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Category,
    required: true,
  },
});

const Inventory = model("Inventory", invSchema);

module.exports = Inventory;
