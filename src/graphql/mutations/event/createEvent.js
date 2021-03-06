import {
  GraphQLNonNull,
} from 'graphql';

import eventType from '../../types/event/event';
import EventInputType from '../../types/event/eventInput';

export default {
  type: eventType,
  args: {
    input: {
      type: new GraphQLNonNull(EventInputType),
    },
  },
  resolve(root, { input }, context) {
    delete input.id;

    if (!input.title) {
      throw new Error('Title required');
    }
    if(!input.userId) {
      throw new Error('User ID required');
    }
    return context.db.Event.create(input);
  }
};