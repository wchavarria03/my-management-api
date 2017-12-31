import {
  GraphQLNonNull,
} from 'graphql';

import userType from '../../types/user';
import UserInputType from '../../types/userInput';

export default {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve(root, { input }, context) {
    if (!input.name) {
      throw new Error('Name required');
     }

    return context.db.User.create(input);
  }
};