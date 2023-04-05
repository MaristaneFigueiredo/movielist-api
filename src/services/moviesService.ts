import moviesRepository from "../repositories/moviesRepository.js"
import { MovieEntity } from "../protocols/movies.js"


async function createMovies({name, platformId, genreId}: MovieEntity) {
    await moviesRepository.createMovies ({name, platformId, genreId})
    
import moviesRepository from "../repositories/moviesRepository.js";
import { MovieEntity } from "../protocols/movies.js";

async function createMovies({ name, plataformId, genreId }: MovieEntity) {
  await moviesRepository.createMovies({ name, plataformId, genreId });
}

async function getMovies() {}
async function countMoviesByplatform() {}
async function updateWatchedMovie() {}
async function deleteMovies() {}
async function updateMovie() {}

export default {
  createMovies,
  getMovies,
  countMoviesByplatform,
  updateWatchedMovie,
  deleteMovies,
  updateMovie,
};
