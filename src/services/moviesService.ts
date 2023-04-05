import moviesRepository from "../repositories/moviesRepository.js";
import { MovieEntity } from "../protocols/movies.js";
import genericErros from "../errors/genericErros.js";

async function movieExistPlataform({name, plataformId}) : Promise<void> {    

   const movieExistPlataform = await moviesRepository.movieExistPlataform ({name, plataformId} )      
   if(movieExistPlataform) {        
         throw genericErros.conflitctError("Movie already exists for this plataform")            
   }        
}


async function createMovies({ name, plataformId, genreId }: MovieEntity) : Promise<void> {
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
  movieExistPlataform
}
