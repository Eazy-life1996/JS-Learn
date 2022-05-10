'use strict';

// let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ? ", "");

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели ? ", "");
    }
  },
  personLvl: function () {
    if (personalMovieDB.count < 10) {
      console.log('Вы посмотрели довльно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы класический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Возникла ошибка');
    }
  },
  lastMovies: function () {
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
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("DB is private");
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }

    }
    personalMovieDB.genres.forEach(function (item, i, arr) {
      console.log(`Любимый жанр №${i + 1} это ${item}`);
    });
  },
};

personalMovieDB.start();
personalMovieDB.personLvl();
personalMovieDB.lastMovies();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();