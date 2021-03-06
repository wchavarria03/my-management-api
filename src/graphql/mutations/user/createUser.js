import {
  GraphQLNonNull,
} from 'graphql';

import userType from '../../types/user/user';
import UserInputType from '../../types/user/userInput';

export default {
  type: userType,
  args: {
    input: {
      type: new GraphQLNonNull(UserInputType),
    },
  },
  resolve(root, { input }, context) {
    delete input.id;
    if (!input.name) {
      throw new Error('Name required');
     }

    return context.db.User.create(input);
  }
};