let {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

const ProductInputType = new GraphQLInputObjectType({
  name: "ProductInput",
  description: "Product payload definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    categoryId: { type: GraphQLInt },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProductInputType;