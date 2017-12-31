let {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} = require('graphql');

const GuestInputType = new GraphQLInputObjectType({
  name: "GuestInput",
  description: "Guest payload definition",
  fields: () => ({
    id: { type: GraphQLID },
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