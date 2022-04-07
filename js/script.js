'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ? ", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let lastMovie = prompt("Один из последних фильмов который вы посмотрели ? ", ""),
      movieRating = prompt("Насколько его оцените ?", "");

    if (lastMovie != '' && movieRating != '' && lastMovie != null && movieRating != null && lastMovie.length < 50) {
      personalMovieDB.movies[lastMovie] = movieRating;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
}

if (personalMovieDB.count < 10) {
  console.log('Вы посмотрели довльно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы класический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Возникла ошибка');
}

console.log(personalMovieDB);
