import { ApolloServer } from "@apollo/server";
import { User } from "./user";

export default async function createApolloServer() {
  // graph ql server
  const gqlServer = new ApolloServer({
    typeDefs: `#graphql
        ${User.typeDefs}
        type Query {
            ${User.queries}
        }
        type Mutations {
            ${User.mutations}
        }
    `,
    resolvers: {
      Query: { ...User.resolvers.queries },
      Mutation: { ...User.resolvers.mutations },
    },
  });
  // starting the gql server
  await gqlServer.start();

  return gqlServer;
}