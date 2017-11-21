let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull
} = require('graphql');

import { Authors } from '../../data/authors';
import AuthorType from '../types/author';
import _find from 'lodash/find';

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "This represent a Post",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: function(post) {
        return _find(Authors, a => a.id == post.author_id);
      }
    }
  })
});

export default PostType;