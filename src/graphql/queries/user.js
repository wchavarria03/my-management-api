import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import userType from '../types/user/user';

export default {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, context) {
    return context.db.User.findById(params.id);
  }
};