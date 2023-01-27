const { Schema, model } = require('mongoose');

const invSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      Category: {
        type: String,
        required: true,
        unique: true,
      }
});

const Inventory = model('Inventory', invSchema);

module.exports = Inventory;
