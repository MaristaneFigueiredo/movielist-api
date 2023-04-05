import { Router } from "express";
import moviesController from "../controllers/moviesController.js"
import validationSchema from "../middlewares/schemaValidationMiddleware.js";
import {movieSchema} from "../schemas/movieSchema.js"

const moviesRouter = Router()

moviesRouter
    .post('/',  validationSchema(movieSchema),  moviesController.createMovies)
     .get('/', moviesController.getMovies)
     .get('/movies/countplatforms', moviesController.countMoviesByplatform )
     .patch('/movie-assistido/:id', moviesController.updateWatchedMovie)  
     .delete('/:id', moviesController.deleteMovies)
     .put('/:id', moviesController.updateMovie)
    


export default moviesRouter 