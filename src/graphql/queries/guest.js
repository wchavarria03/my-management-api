import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
const Op = require('sequelize').Op;

import guestType from '../types/guest/guest';

export default {
  type: guestType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, context) {
    return context.db.Guest.findOne(
      { where: {id: params.id, isDeleted: { [Op.not]: true }}}
    );
  }
};