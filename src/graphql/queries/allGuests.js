import {
  GraphQLList,
} from 'graphql';

import guestType from '../types/guest';

export default {
  type: new GraphQLList(guestType),
  resolve(root, params, context) {
    return context.db.Guest.findAll();
  }
};