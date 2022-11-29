const Movie = require('../models/Movie');
const sendResponse = require('../utils/sendResponse');
const handleError = require('../utils/handleError');
const CustomError = require('../utils/CustomError');

exports.getAllMovies = async (res) => {
  try {
    const movies = await Movie.find();

    sendResponse(res, 200, {
      status: 'success',
      results: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    handleError(res, err);
  }
};

exports.createMovie = async (res, body) => {
  try {
    const movie = await Movie.create({ ...body });

    sendResponse(res, 201, {
      status: 'success',
      data: {
        movie,
      },
    });
  } catch (err) {
    handleError(res, err);
  }
};

exports.getMovie = async (res, id) => {
  try {
    const movie = await Movie.findOne({
      _id: id,
    });

    if (!movie) {
      throw new CustomError('No movie found with this ID', 404);
    }

    sendResponse(res, 200, {
      status: 'success',
      data: {
        movie,
      },
    });
  } catch (err) {
    handleError(res, err);
  }
};

exports.updateMovie = async (res, body, id) => {
  try {
    const movie = await Movie.findOneAndUpdate({ _id: id }, body, {
      new: true,
      runValidators: true,
    });

    if (!movie) {
      throw new CustomError('No movie found with this ID', 404);
    }

    sendResponse(res, 200, {
      status: 'success',
      data: {
        movie,
      },
    });
  } catch (err) {
    handleError(res, err);
  }
};

exports.deleteMovie = async (res, id) => {
  try {
    const movie = await Movie.findOneAndRemove({
      _id: id,
    });

    if (!movie) {
      throw new CustomError('No movie found with this ID', 404);
    }

    sendResponse(res, 204, {
      status: 'success',
      data: null,
    });
  } catch (err) {
    handleError(res, err);
  }
};
