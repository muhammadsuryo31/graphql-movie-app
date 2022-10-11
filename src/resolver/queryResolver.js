const Movie = require('./../models/movieModels')

const moviesResolver = async (parent, args) => {
    return Movie.find();
}

const movieResolver = (parent, args) => {
    return Movie.findById(args.id)
}

module.exports = {moviesResolver, movieResolver};