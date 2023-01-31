const { Inventory, Category } = require("../models");

const resolvers = {
  Query: {
    inventory: async () => {
      return Inventory.find({});
    },
    category: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Category.find(params);
    },
  },
};
module.exports = resolvers;
