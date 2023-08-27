const {movie} = require("../models");

/**
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createMovie = async (reqBody) =>{
    return movie.create(reqBody);
};

const getMovieList = async (req , res) =>{
    return movie.find();
};

const deleteMovie = async (movieId) =>{
    return movie.findByIdAndDelete(movieId);
};

module.exports = {
    createMovie,
    getMovieList,
    deleteMovie
}