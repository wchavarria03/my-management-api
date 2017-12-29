import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import guestType from '../types/guest';
import getProjection from '../get-projection';

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