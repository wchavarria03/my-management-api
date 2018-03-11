let {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');
const Op = require('sequelize').Op;
import EventType from '../event/event';

const GuestType = new GraphQLObjectType({
  name: "Guest",
  description: "This represent a guest",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    description: { type: GraphQLString },
    code: { type: GraphQLString },
    extraSpaces: { type: GraphQLInt },
    isConfirmed: { type: GraphQLBoolean },
    confirmedSpaces: { type: GraphQLInt },
    event: {
      type: EventType,
      resolve: function(guest, params, context) {
        // TODO
        return context.db.Event.findOne({where: { id: guest.eventId, isDeleted: { [Op.not]: true } }});
      }
    },
  })
});

export default GuestType;