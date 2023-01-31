const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Inventory {
    _id: ID!
    name: String!
    description: String!
    price: Int
    Category: String!
  }
  type Category {
    _id: ID!
    name: String!
    description: String!
    icon: String!
  }
  type Query {
    inventory: [Inventory]
    category(_id: String): [Category]
  }
`;
module.exports = typeDefs;
