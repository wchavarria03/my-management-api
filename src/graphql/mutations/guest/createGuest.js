import {
  GraphQLNonNull,
} from 'graphql';

import guestType from '../../types/guest';
import GuestInputType from '../../types/guestInput';

export default {
  type: guestType,
  args: {
    input: {
      type: new GraphQLNonNull(GuestInputType),
    },
  },
  resolve(root, { input }, context) {
    if (!input.name) {
      throw new Error('Name required');
     }
    return context.db.Guest.create(input);
  }
};