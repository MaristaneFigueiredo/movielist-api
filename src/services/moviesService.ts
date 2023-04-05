import moviesRepository from "../repositories/moviesRepository.js";
import { MovieEntity } from "../protocols/movies.js";

async function createMovies({ name, plataformId, genreId }: MovieEntity) {
  await moviesRepository.createMovies({ name, plataformId, genreId });
}

async function getMovies(req: Request, res: Response) {}
async function countMoviesByplatform(req: Request, res: Response) {}
async function updateWatchedMovie(req: Request, res: Response) {}
async function deleteMovies(req: Request, res: Response) {}
async function updateMovie(req: Request, res: Response) {}

export default {
  createMovies,
  getMovies,
  countMoviesByplatform,
  updateWatchedMovie,
  deleteMovies,
  updateMovie,
};
