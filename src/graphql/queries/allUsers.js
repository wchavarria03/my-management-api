import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
const Op = require('sequelize').Op;

import userType from '../types/user/user';

export default {
  type: new GraphQLList(userType),
  resolve(root, params, context) {
    return context.db.User.findAll(
      { 
        where: { isDeleted: { [Op.not]: true } }
      }
    );
  }
};