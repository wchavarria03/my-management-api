let {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

const UserInputType = new GraphQLInputObjectType({
  name: "UserInput",
  description: "Guest payload definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default UserInputType;