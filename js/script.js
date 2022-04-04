'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ? ", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let lastMovieOne = prompt("Один из последних фильмов который вы посмотрели ? ", ""),
    movieRatingOne = prompt("Насколько его оцените ?", ""),
    lastMovietwo = prompt("Один из последних фильмов который вы посмотрели ? ", ""),
    movieRatingtwo = prompt("нАсколько его оцените ?", "");

personalMovieDB.movies[lastMovieOne] = movieRatingOne; 
personalMovieDB.movies[lastMovietwo] = movieRatingtwo; 

console.log(personalMovieDB);
