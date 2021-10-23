const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  MongoLibMock,
  getAllStub,
  getStub
} = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe('[ services / movies ]', function() {
  const MoviesServices = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  });

  const moviesService = new MoviesServices();

  describe('#getMovies', function() {
    describe('when getMovies method is called', async function() {
      it('should call the getall MongoLib method', async function() {
        await moviesService.getMovies({});
        assert.strictEqual(getAllStub.called, true);
      });

      it('should return an array of movies', async function() {
        const result = await moviesService.getMovies({});
        const expected = moviesMock;
        assert.deepEqual(result, expected);
      });
    });
  });

  describe('#getMovie', function() {
    describe('when the `getMovie` is called`', function() {
      it('should call `mongoDB.get` with the `collection` name an a `movieId`', async function() {
        // Arrange
        const movieId = 'abc';

        // Act
        await moviesService.getMovie({ movieId });

        // Assert
        assert.strictEqual(getStub.calledWith('movies', movieId), true);
      });
    });

    describe('when the `mongoDB.get` returns a `movie`', function() {
      it('should return that `movie`', function() {});
    });

    describe('when the `mongoDB.get` does not return a `movie`', function() {
      it('should return an empty object', function() {});
    });
  });
});
