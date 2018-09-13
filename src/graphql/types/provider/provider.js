let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
} = require('graphql');

const ProviderType = new GraphQLObjectType({
  name: "Provider",
  description: "This represent a provider",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProviderType;