const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Inventory {
    _id: ID!
    name: String
    description: String!
    price: Int
    category: Category
  }
  type Category {
    _id: ID!
    name: String
    icon: String!
  }
  type Query {
    inventory: [Inventory]
    category(_id: String): Category
  }
`;
module.exports = typeDefs;
