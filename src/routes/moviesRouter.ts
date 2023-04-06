import { Router } from "express";
import moviesController from "../controllers/moviesController.js"
import validationSchema from "../middlewares/schemaValidationMiddleware.js";
import {movieSchema} from "../schemas/movieSchema.js"

const moviesRouter = Router()

moviesRouter
    .post('/',  validationSchema(movieSchema),  moviesController.createMovies)
     .get('/', moviesController.getMovies)
     .get('/countplatforms', moviesController.countMoviesBypPlatform )
     .delete('/:id', moviesController.deleteMovie)
     .patch('/movie-assistido/:id', moviesController.updateWatchedMovie)       
     .put('/:id', moviesController.updateMovie)
    


export default moviesRouter 