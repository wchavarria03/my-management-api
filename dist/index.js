'use strict';

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _graphql2.default;

// This is the Root Query
// const BlogQueryRootType = new GraphQLObjectType({
//   name: 'BlogAppSchema',
//   description: "Blog Application Schema Query Root",
//   fields: () => ({
//     authors: {
//       type: new GraphQLList(AuthorType),
//       description: "List of all Authors",
//       resolve: function() {
//         return Authors
//       }
//     },
//     posts: {
//       type: new GraphQLList(PostType),
//       description: "List of all Posts",
//       resolve: function() {
//         return Posts
//       }
//     }
//   })
// });

// This is the schema declaration
// const BlogAppSchema = new GraphQLSchema({
//   query: BlogQueryRootType
//     // If you need to create or updata a datasource, 
//     // you use mutations. Note:
//     // mutations will not be explored in this post.
//     // mutation: BlogMutationRootType 
// });
// const _ = require('lodash');