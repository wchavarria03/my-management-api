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
    delete input.userId;
    if (!input.title) {
      throw new Error('Title required');
    }
    if (!input.id) {
      throw new Error('Id required');
    }
    // return context.db.Event.update(input);
    return context.db.Event.update(
      input,
      { where: { id: input.id } }
    ).then((data) => {
      return context.db.Event.findById(input.id);
    });
  }
};