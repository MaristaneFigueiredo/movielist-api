import { QueryResult } from "pg";
import connectionDb from "../config/database.js";
import { MovieEntity, MovieResponse} from "../protocols/movies.js";


async function createMovies({ name, plataformId, genreId,}: MovieEntity) : Promise<void>{
  const query = `
        INSERT INTO movies (name, "plataformId", "genreId" ) 
        VALUES ($1, $2, $3)
    `;

  await connectionDb.query(query, [name, plataformId, genreId]);
  
}


async function movieExistPlataform({name, plataformId}:MovieResponse) : Promise<QueryResult<MovieResponse>> {
    
    const query = `
        SELECT * FROM movies WHERE name = $1 AND "plataformId" = $2       
    `;   

    return await connectionDb.query(query, [name, plataformId]);
}


async function getMovies(): Promise<QueryResult<MovieResponse>>   { 

    const query = `        
        SELECT m.id, m.name as movie, m.whatched, p.name as plataform, g.name as genre
        FROM movies m 
        INNER JOIN plataforms p ON m."plataformId" = p.id
        INNER JOIN genres g ON m."genreId" = g.id
    `; 
    return await connectionDb.query(query)
}

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
  movieExistPlataform
};
