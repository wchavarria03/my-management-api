let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
} = require('graphql');

const ProductCategoryType = new GraphQLObjectType({
  name: "ProductCategory",
  description: "This represent a product category",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProductCategoryType;
