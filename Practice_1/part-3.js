/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

// 1)

'use strict';

export const personalMovieDB = {
   getStarted: function () {
      let numberMovies = +prompt('Скільки фільмів ви вже подивились?');

      while (numberMovies == '' || numberMovies == null || isNaN(numberMovies)) {
         numberMovies = +prompt('Скільки фільмів ви вже подивились?');
      }

      this.count(numberMovies);
   },
   count: function (number) {
      if (number < 10) {
         alert('Просмотрено довольно мало фильмов');
      } else if (number <= 30 && number >= 10) {
         alert('Вы классический зритель');
      } else {
         alert('Вы киноман');
      }
   },
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   askAboutMovie: function () {
      let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?');
      let filmRating = +prompt('Як його оцінете по 10 бальній шкалі');

      if (!lastWatchFilm || !filmRating || lastWatchFilm.length > 50 || filmRating > 10) {
         alert("One of your answers were wrong");
      } else {
         this.movies[lastWatchFilm] = filmRating;
      }
   },
   showMyDB: function () {
      if (!this.privat) {
         console.log(personalMovieDB)
      }
   },
   writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
         let yourGanre = prompt('Какой ваш один из любимых жанров?')

         this.genres[i] = yourGanre;
      }
   },
};