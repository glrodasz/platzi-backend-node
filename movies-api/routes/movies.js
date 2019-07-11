const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function(req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
