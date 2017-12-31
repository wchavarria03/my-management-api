let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');

import EventType from '../event/event';

const UserType = new GraphQLObjectType({
  name: "User",
  description: "This represent an user",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean},
    events: {
      type: new GraphQLList(EventType),
      resolve: function(user, params, context) {
        return context.db.Event.findAll({where: { userId: [user.id] }});
      }
    }
  })
});

export default UserType;