import {
  GraphQLNonNull,
} from 'graphql';

import eventType from '../../types/event';
import EventInputType from '../../types/eventInput';

export default {
  type: eventType,
  args: {
    input: {
      type: new GraphQLNonNull(EventInputType),
    },
  },
  resolve(root, { input }, context) {
    if (!input.title) {
      throw new Error('Title required');
     }
    return context.db.Event.create(input);
  }
};