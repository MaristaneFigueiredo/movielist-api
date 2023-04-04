import connectionDb from "../config/database.js"
import { MovieEntity } from "../protocols/movies.js"

async function createMovies({name, platformId, genreId}:MovieEntity) {
    
}

async function getMovies(req: Request, res: Response) {
    
}
async function countMoviesByplatform(req: Request, res: Response) {
    
}
async function updateWatchedMovie(req: Request, res: Response) {
    
}
async function deleteMovies(req: Request, res: Response) {
    
}
async function updateMovie(req: Request, res: Response) {
    
}


export default {
    createMovies,
    getMovies,
    countMoviesByplatform,
    updateWatchedMovie,
    deleteMovies,
    updateMovie
}