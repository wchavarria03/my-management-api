let {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

const EventInputType = new GraphQLInputObjectType({
  name: "EventInput",
  description: "Event payload definition",
  fields: () => ({
    title: { type: GraphQLString },
    type: { type: GraphQLString },
    place: { type: GraphQLString },
    eventDate: { type: GraphQLString },
    userId: { type: GraphQLInt },
  })
});

export default EventInputType;