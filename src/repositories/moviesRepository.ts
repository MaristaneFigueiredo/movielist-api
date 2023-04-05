import connectionDb from "../config/database.js";
import { MovieEntity } from "../protocols/movies.js";

async function createMovies({
  name,
  plataformId,
  genreId,
}: MovieEntity): Promise<void> {
  const query = `
        INSERT INTO movies (name, "plataformId", "genreId" ) 
        VALUES ($1, $2, $3)
    `;

  await connectionDb.query(query, [name, plataformId, genreId]);
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
