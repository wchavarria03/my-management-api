let {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = require('graphql');

const ProductInputType = new GraphQLInputObjectType({
  name: "ProductInput",
  description: "Product payload definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProductInputType;