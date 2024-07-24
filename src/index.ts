import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloServer from "./graphql";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  //   gql server port
  app.use("/graphql", expressMiddleware(await createApolloServer()));

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
