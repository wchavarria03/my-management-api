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
    if (!input.name) {
      throw new Error('Name required');
    }
     if (!input.id) {
      throw new Error('Id required');
    }
    return context.db.User.update(
      input,
      { where: { id: input.id } }
    ).then((data) => {
      return context.db.User.findById(input.id);
    });
  }
};