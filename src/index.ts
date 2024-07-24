import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  // graph ql server
  const gqlServer = new ApolloServer({
    typeDefs: `type Query {
    hello: String}`,
    resolvers: {
      Query: {
        hello: () => `I am a graphql server`,
      },
    },
  });
  // starting the gql server
  await gqlServer.start();

  //   gql server port
  app.use("/graphql", expressMiddleware(gqlServer));

  // http server
  app.get("/", (req, res) => {
    res.json({
      message: "Server is healthy",
    });
  });

  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

// a global level async fn is created so that await call to the gqlServer can be made
init();
