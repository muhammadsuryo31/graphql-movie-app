const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
  } = require("graphql");

  const movieType = new GraphQLObjectType({
  name: "movie",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    ratings: { type: GraphQLFloat },
    casts: { type: new GraphQLList(GraphQLString) },
    poster: { type: GraphQLString },
    description: { type: GraphQLString },
    earning: { type: GraphQLInt },
  }),
});

module.exports = {movieType};