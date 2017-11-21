'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authors = require('../../data/authors');

var _author = require('../types/author');

var _author2 = _interopRequireDefault(_author);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        type: _author2.default,
        resolve: function resolve(post) {
          return (0, _find3.default)(_authors.Authors, function (a) {
            return a.id == post.author_id;
          });
        }
      }
    };
  }
});

exports.default = PostType;