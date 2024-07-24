const mutations = `#graphql
    newUser(
    username: String!
    email: String!
    firstName: String!
    lastName: String
    password: String!
    phone: String!
    profileImageUrl: String
): String 
`;

export default mutations;
