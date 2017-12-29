import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import guestType from '../types/guest';

export default {
  type: guestType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, context) {
    return context.db.Guest.findById(params.id);
  }
};