import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import Authors from '../../data/authors';
import authorType from '../types/author';
import getProjection from '../get-projection';

export default {
  type: authorType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    // const projection = getProjection(options.fieldASTs[0]);

    // return BlogPostModel
    //   .findById(params.id)
    //   .select(projection)
    //   .exec();
    return Authors[0];
  }
};