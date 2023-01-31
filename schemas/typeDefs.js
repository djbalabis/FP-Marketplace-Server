const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Inventory {
    _id: ID!
    name: String!
    description: String!
    price: Int
    category: Category
  }
  type Category {
    _id: ID!
    name: String!
    icon: String!
  }
  type Query {
    inventory: [Inventory]
    category(_id: String): Category
  }
  type Mutation {
    addItem(name: String!, description: String!, price: Int): Inventory
    removeItem(_id: ID): Inventory
  }
`;
module.exports = typeDefs;
