import {
  GraphQLList,
} from 'graphql';

import eventType from '../types/event/event';

export default {
  type: new GraphQLList(eventType),
  resolve(root, params, context) {
    return context.db.Event.findAll();
  }
};