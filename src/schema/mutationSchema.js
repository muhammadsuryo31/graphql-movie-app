const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLID,
} = require("graphql");
const resolver = require("./../resolver/mutationResolver");
const { movieType } = require("./dataType");

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addMovie: {
      type: movieType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        ratings: { type: GraphQLFloat },
        casts: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        poster: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        earning: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: resolver.addMovieResolver,
    },
    editMovie: {
        type: movieType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        ratings: { type: new GraphQLNonNull(GraphQLFloat) },
        casts: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
        poster: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        earning: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: resolver.editMovieResolver,
    },
    deleteMovie: {
        type: movieType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: resolver.deleteMovieResolver
      }
  }
});

module.exports = mutation;
