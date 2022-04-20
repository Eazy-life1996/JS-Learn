'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ? ", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ? ", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLvl() {
  if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели довльно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы класический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Возникла ошибка');
  }
}
detectPersonalLvl();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log("DB is private");
  }
  }
  showMyDB();

  function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  }
  writeYourGenres();
