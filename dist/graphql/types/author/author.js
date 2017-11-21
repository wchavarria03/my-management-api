"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require('graphql'),
    GraphQLID = _require.GraphQLID,
    GraphQLString = _require.GraphQLString,
    GraphQLObjectType = _require.GraphQLObjectType,
    GraphQLNonNull = _require.GraphQLNonNull;

var AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represent an author",
  fields: function fields() {
    return {
      _id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      twitterHandle: { type: GraphQLString }
    };
  }
});

exports.default = AuthorType;