import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import eventType from '../types/event';
import getProjection from '../get-projection';

export default {
  type: eventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, context) {
    return context.db.Event.findById(params.id);
  }
};
