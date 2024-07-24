const typeDefs = `#graphql
    type User {
        id: ID!
        username: String!
        email: String!
        firstName: String!
        lastName: String
        phone: String!
        profileImageUrl: String
    }
`;

export default typeDefs;
