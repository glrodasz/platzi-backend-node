const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);

const getStub = sinon.stub().resolves(moviesMock[0])

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }

  get(collection, movieId) {
    return getStub(collection, movieId)
  }
}

module.exports = {
  getAllStub,
  createStub,
  getStub,
  MongoLibMock
};
