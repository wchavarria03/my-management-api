import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import userType from '../types/user';
import getProjection from '../get-projection';
import { stringify } from 'querystring';

export default {
  type: new GraphQLList(userType),
  resolve(root, params, context) {
    return context.db.User.findAll();
  }
};