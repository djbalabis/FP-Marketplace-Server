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
  Mutation: {
    addItem: async (inventory, args) => {
      const item = await Inventory.create(args);
      return item;
    },
    // removeItem: async (inventory, {_id }, context) => {
    //   const remove = await Inventory.remove(_id);
    //   return remove;
    // },
  },
};
module.exports = resolvers;
