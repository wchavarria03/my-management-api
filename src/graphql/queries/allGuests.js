import {
  GraphQLList,
} from 'graphql';
const Op = require('sequelize').Op;

import guestType from '../types/guest/guest';

export default {
  type: new GraphQLList(guestType),
  resolve(root, params, context) {
    return context.db.Guest.findAll(
      { 
        where: { isDeleted: { [Op.not]: true } }
      }
    );
  }
};