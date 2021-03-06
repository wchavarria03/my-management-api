import {
  GraphQLNonNull,
} from 'graphql';

import guestType from '../../types/guest/guest';
import GuestInputType from '../../types/guest/guestInput';

export default {
  type: guestType,
  args: {
    input: {
      type: new GraphQLNonNull(GuestInputType),
    },
  },
  resolve(root, { input }, context) {
    delete input.id;
    if (!input.name) {
      throw new Error('Name required');
     }
    return context.db.Guest.create(input);
  }
};