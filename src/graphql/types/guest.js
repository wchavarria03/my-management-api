let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

import EventType from '../types/event';

const GuestType = new GraphQLObjectType({
  name: "Guest",
  description: "This represent a guest",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    code: { type: GraphQLString },
    extraSpaces: { type: GraphQLInt },
    isConfirmed: { type: GraphQLBoolean },
    confirmedSpaces: { type: GraphQLInt },
    event: {
      type: EventType,
      resolve: function(guest, params, context) {
        return context.db.Event.findById(guest.eventId);
      }
    },
  })
});

export default GuestType;