import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
const Op = require('sequelize').Op;

import eventType from '../types/event/event';

export default {
  type: eventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, context) {
    return context.db.Event.findOne(
      { where: {id: params.id, isDeleted: { [Op.not]: true }}}
    );
  }
};
