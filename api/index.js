const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    nome: String!
    ativo: Boolean!
    email String
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });
