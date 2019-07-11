const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }

  async createMovie() {
    const createMovieId = await Promise.resolve(moviesMock[0].id);
    return createMovieId;
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return updatedMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
