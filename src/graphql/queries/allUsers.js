import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import userType from '../types/user';

export default {
  type: new GraphQLList(userType),
  resolve(root, params, context) {
    return context.db.User.findAll();
  }
};