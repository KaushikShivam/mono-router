const http = require('http');

const {
  getAllMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
} = require('./controllers/movie.controller');
const sendResponse = require('./utils/sendResponse');
const executeBody = require('./utils/executeBody');

const API_VERSION = '/api/v1';
const RESOURCE = 'movies';
const MOVIES_URL = `${API_VERSION}/${RESOURCE}`;

const server = http.createServer(async (req, res) => {
  const pathName = req.url;
  const { method } = req;

  if (pathName.includes(MOVIES_URL)) {
    if (method === 'GET') {
      return pathName === MOVIES_URL
        ? getAllMovies(res)
        : getMovie(res, pathName.split('/').pop());
    }

    if (method === 'POST') {
      executeBody(req, (body) => createMovie(res, body));
    }

    if (method === 'PATCH') {
      executeBody(req, (body) =>
        updateMovie(res, body, pathName.split('/').pop())
      );
    }

    if (method === 'DELETE') {
      deleteMovie(res, pathName.split('/').pop());
    }
  } else {
    sendResponse(res, 404, {
      status: 'fail',
      message: `${pathName} not found`,
    });
  }
});

module.exports = server;
