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
     if (!input.id) {
      throw new Error('Id required');
     }
    // return context.db.Event.update(input);
    return context.db.Guest.update(
      { isDeleted: true },
      { where: { id: input.id } }
    ).then((data) => {
      return context.db.Guest.findById(input.id);
    });
  }
};