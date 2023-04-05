import {Request, Response, NextFunction} from "express"
import { MovieEntity } from "../protocols/movies.js"
import moviesService from "../services/moviesService.js"
import httpStatus from "http-status"

async function createMovies(req: Request, res: Response, next:NextFunction) {   
 
    const {name, plataformId, genreId} = req.body as MovieEntity      
    
    try {
        await moviesService.movieExistPlataform({ name, plataformId})

        await moviesService.createMovies ({name, plataformId, genreId})
        
        return res.sendStatus(httpStatus.CREATED)        
        
    } catch (error) {        
        next(error)
    }
    
}

async function getMovies(req: Request, res: Response, next:NextFunction) {
    try {
        const movies = await moviesService.getMovies();
        res.send(movies);
      } catch (error) {
        next(error);
      }
    
}
async function countMoviesByplatform(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const movies = await moviesService.countMoviesByplatform();
    res.send(movies);
  } catch (error) {
    next(error);
  }
}
async function updateWatchedMovie(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await moviesService.updateWatchedMovie();
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}
async function deleteMovies(req: Request, res: Response, next: NextFunction) {
  try {
    await moviesService.deleteMovies();
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}
async function updateMovie(req: Request, res: Response, next: NextFunction) {
  try {
    await moviesService.updateMovie();
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

export default {
  createMovies,
  getMovies,
  countMoviesByplatform,
  updateWatchedMovie,
  deleteMovies,
  updateMovie,
};
