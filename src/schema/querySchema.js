const { GraphQLObjectType, GraphQLList, GraphQLID } = require("graphql");
const resolver = require("./../resolver/queryResolver");
const { movieType } = require("./dataType");

const query = new GraphQLObjectType({
  name: "QueryType",
  fields: {
    movies: {
      type: new GraphQLList(movieType),
      resolve: resolver.moviesResolver,
    },
    movie: {
      type: movieType,
      args: { id: { type: GraphQLID } },
      resolve: resolver.movieResolver,
    },
  },
});

module.exports = query;
