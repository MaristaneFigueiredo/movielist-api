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
