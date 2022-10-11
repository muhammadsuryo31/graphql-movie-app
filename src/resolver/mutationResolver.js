const movie = require('./../models/movieModels');
const Movie = require('./../models/movieModels')

const addMovieResolver = (parent, args) => {
    const movieInput = {
        title: args.title,
        ratings: args.ratings,
        casts: args.casts,
        poster: args.poster,
        description: args.description,
        earning: args.earning
    }
    const newMovie = new Movie (movieInput)
    return newMovie.save();
}

const editMovieResolver = (parent, args) => {
    const movieInputUpdate = {
        title: args.title,
        ratings: args.ratings,
        casts: args.casts,
        poster: args.poster,
        description: args.description,
        earning: args.earning
    }
    
    return movie.findByIdAndUpdate(args.id, { $set: movieInputUpdate }, {new: true})
}

const deleteMovieResolver = (parent, args) => {
    return movie.findByIdAndDelete(args.id)
}

module.exports = {
    addMovieResolver,
    editMovieResolver,
    deleteMovieResolver
}