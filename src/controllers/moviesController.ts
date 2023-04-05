import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { MovieEntity } from "../protocols/movies.js";
import moviesService from "../services/moviesService.js";

async function createMovies(req: Request, res: Response, next: NextFunction) {
  const { name, plataformId, genreId } = req.body as MovieEntity;

  try {
    await moviesService.createMovies({ name, plataformId, genreId });
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
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
