'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _author = require('../author/author');

var _require = require('graphql'),
    GraphQLString = _require.GraphQLString,
    GraphQLList = _require.GraphQLList,
    GraphQLObjectType = _require.GraphQLObjectType,
    GraphQLNonNull = _require.GraphQLNonNull;

var PostType = new GraphQLObjectType({
  name: "Post",
  description: "This represent a Post",
  fields: function fields() {
    return {
      id: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      body: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve: function resolve(post) {
          return _.find(_author.Authors, function (a) {
            return a.id == post.author_id;
          });
        }
      }
    };
  }
});

exports.default = PostType;