/* Задание на урок ToDo:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы. // DONE

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB. // DONE

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"
*/

'use strict';

export const personalMovieDB = {
   getStarted: function () {
      let numberMovies = +prompt('Скільки фільмів ви вже подивились?').trim();

      while (numberMovies == '' || numberMovies == null || isNaN(numberMovies)) {
         numberMovies = +prompt('Скільки фільмів ви вже подивились?').trim();
      }

      this.count = numberMovies;

      if (numberMovies < 10) {
         alert('Просмотрено довольно мало фильмов');
      } else if (numberMovies <= 30 && numberMovies >= 10) {
         alert('Вы классический зритель');
      } else {
         alert('Вы киноман');
      }
   },
   count: null,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   askAboutMovie: function () {
      let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?').trim();
      let filmRating = +prompt('Як його оцінете по 10 бальній шкалі');

      if (!lastWatchFilm || !filmRating || lastWatchFilm.length > 50 || filmRating > 10) {
         alert("One of your answers were wrong");
      } else {
         this.movies[lastWatchFilm] = filmRating;
      }
   },
   showMyDB: function () {
      if (!this.privat) {
         console.dir(personalMovieDB)
      }
   },
   writeYourGenres: function () {
      for (let i = 0; i < 3; i++) {
         let yourGanre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

         while (yourGanre == null || yourGanre == '') {
            yourGanre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
         }

         this.genres[i] = yourGanre.trim();
      }

      this.genres.forEach(function (arrName, index) {
         console.log(`Любимый жанр ${index + 1} - это ${arrName}`);
      })
   },
   toggleVisibleMyDB: function () {
      if (this.privat) {
         this.privat = false;
      } else {
         this.privat = true;
      }
   },
};
