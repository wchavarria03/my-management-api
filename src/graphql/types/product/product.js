let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
import ProductCategoryType from '../productCategory/productCategory';
import ProviderType from '../provider/provider';

const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "This represent a product",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLNumber },
    amount: { type: GraphQLNumber },
    category: {
      type: ProductCategoryType,
      resolve: function(event, params, context) {
        return context.db.ProductCategory.findOne({where: {id: product.categoryId, isDeleted: { [Op.not]: true }}});
      }
    },
    provider: {
      type: ProviderType,
      resolve: function(event, params, context) {
        return context.db.Provider.findOne({where: {id: product.providerId, isDeleted: { [Op.not]: true }}});
      }
    },
    isDeleted: { type: GraphQLBoolean},
  })
});

export default ProductType;