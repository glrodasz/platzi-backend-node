const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  MongoLibMock,
  getAllStub,
  getStub,
  createStub
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

  describe("#createMovie", () => {
    describe("when the method is called", () => {
      it("should call `mongo.DB.create` with the collection name and the `movie` object", async () => {
        // Arrange
        const movie = "pocahontas"
        // const mongoDBCreateMock

        // Act 
        await moviesService.createMovie({ movie })

        // Assert
        assert.strictEqual(createStub.calledWith('movies', movie), true);
      })
    })

    describe("when the method is called", () => {
      it("should call return the movie id created", async () => {
        // Arrange
        const movie = "pocahontas"
        const expected = "d2a4a062-d256-41bb-b1b2-9d915af6b75e"

        // Act 
        const result = await moviesService.createMovie({ movie })

        // Assert
        assert.deepEqual(result, expected);
      })
    })

  })
});
