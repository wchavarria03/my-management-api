let {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql');

import UserType from '../types/user';
import GuestType from '../types/guest';

const EventType = new GraphQLObjectType({
  name: "Event",
  description: "This represent a Event",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    type: { type: GraphQLString },
    place: { type: GraphQLString },
    eventDate: { type: GraphQLString },
    user: {
      type: UserType,
      resolve: function(event, params, context) {
        return context.db.User.findById(event.userId);
      }
    },
    guests: {
      type: new GraphQLList(GuestType),
      resolve: function(event, params, context) {
        return context.db.Guest.findAll({where: { eventId: [event.id] }});
      }
    }
  })
});

export default EventType;