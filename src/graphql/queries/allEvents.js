import {
  GraphQLList,
} from 'graphql';
const Op = require('sequelize').Op;

import eventType from '../types/event/event';

export default {
  type: new GraphQLList(eventType),
  resolve(root, params, context) {
    return context.db.Event.findAll(
      { 
        where: { isDeleted: { [Op.not]: true } }
      }
    );
  }
};