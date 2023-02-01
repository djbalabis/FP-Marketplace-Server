const { Schema, model } = require("mongoose");

const Category = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
  },
});

module.exports = Category;
