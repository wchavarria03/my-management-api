let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represent an author",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    twitterHandle: { type: GraphQLString }
  })
});

export default AuthorType;