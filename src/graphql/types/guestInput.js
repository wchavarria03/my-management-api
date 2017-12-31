let {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

import EventType from '../types/event';

const GuestInputType = new GraphQLInputObjectType({
  name: "GuestInput",
  description: "Guest payload definition",
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    description: { type: GraphQLString },
    code: { type: GraphQLString },
    extraSpaces: { type: GraphQLInt },
    isConfirmed: { type: GraphQLBoolean },
    confirmedSpaces: { type: GraphQLInt },
    eventId: { type: GraphQLInt }
  })
});

export default GuestInputType;