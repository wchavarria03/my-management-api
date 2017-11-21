import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import Posts from '../../data/posts';
import postType from '../types/post';
import getProjection from '../get-projection';

export default {
  type: postType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    // const projection = getProjection(options.fieldASTs[0]);

    // return PostModel
    //   .findById(params.id)
    //   .select(projection)
    //   .exec();
    return Posts[0];
  }
};