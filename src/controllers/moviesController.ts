import {Request, Response, NextFunction} from "express"
import { MovieEntity } from "../protocols/movies.js"
import moviesService from "../services/moviesService.js"
import httpStatus from "http-status"

async function createMovies(req: Request, res: Response, next:NextFunction) {
    
    const {name, platformId, genreId}: MovieEntity = req.body as MovieEntity


    console.log('controller {name, platformId, genreId}', {name, platformId, genreId})
    
    try {
        await moviesService.createMovies ({name, platformId, genreId})
        return res.sendStatus(httpStatus.OK)
        
    } catch (error) {
        next(error)
    }
    
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


export  default {
    createMovies,
    getMovies,
    countMoviesByplatform,
    updateWatchedMovie,
    deleteMovies,
    updateMovie
}

