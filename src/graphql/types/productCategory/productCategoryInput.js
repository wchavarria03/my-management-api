let {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

const ProductCategoryInputType = new GraphQLInputObjectType({
  name: "ProductCategoryInput",
  description: "Product Category payload definition",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    categoryId: { type: GraphQLInt },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProductCategoryInputType;