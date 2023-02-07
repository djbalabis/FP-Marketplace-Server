const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { Inventory } = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.delete("/inventory/delete/:id", async (req, res) => {
  const result = await Inventory.findByIdAndDelete(req.params.id);
  res.json(result);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// app.get("/", (req, res) => {
//   res.json({ message: "Yoooo World!" });
// });
// app.listen(PORT, () => {
//   console.log(`express server running on port ${PORT}`);
// });
