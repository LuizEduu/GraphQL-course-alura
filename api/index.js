const { ApolloServer } = require("apollo-server");
const userSchema = require("./user/schema/user.graphql");
const userResovers = require("./user/resolvers/userResolvers");
const UsersAPI = require("./user/datasource/user");

const typeDefs = [userSchema];
const resolvers = [userResovers];

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersApi: new UsersAPI()
    }
  } });

server.listen().then(({ url }) => {
  console.log(`Server is running na porta ${url}`);
});
