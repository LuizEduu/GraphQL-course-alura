const userResolvers = {
  Query: {
    users: async (root, args, { dataSources }) =>
      await dataSources.usersApi.getUsers(),
    user: async (root, { id }, { dataSources }) =>
      await dataSources.usersApi.getUserById(id),
  },

  Mutation: {
    addUser: async (root, user, { dataSources }) =>
      dataSources.usersApi.addUser(user),
    updateUser: async (root, newData, { dataSources }) =>
      dataSources.usersApi.updateUser(newData),
    deleteUser: async (root, id, {dataSources}) =>
      dataSources.usersApi.deleteUser(id)
  },
};

module.exports = userResolvers;
