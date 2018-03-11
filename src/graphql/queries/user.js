import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
const Op = require('sequelize').Op;

import userType from '../types/user/user';

export default {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, context) {
    return context.db.User.findById(
      { where: {id: params.id, isDeleted: { [Op.not]: true }}}
    );
  }
};