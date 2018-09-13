let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
import ProductCategoryType from '../productCategory/productCategory';

const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "This represent a product",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    category: {
      type: ProductCategoryType,
      resolve: function(event, params, context) {
        return context.db.ProductCategory.findOne({where: {id: product.categoryId, isDeleted: { [Op.not]: true }}});
      }
    },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProductType;