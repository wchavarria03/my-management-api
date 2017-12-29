import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import eventType from '../types/event';

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
