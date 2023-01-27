const { Schema, model } = require('mongoose');

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  }
});

const Category = model('Category', catSchema);

module.exports = Category;
