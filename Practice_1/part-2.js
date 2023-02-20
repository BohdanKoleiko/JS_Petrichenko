// ч.2

/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

// The first solution
export const firstSolution = function () {
   for (let i = 0; i < 3; i++) {
      let numberFilms = +prompt('Скільки фільмів ви вже подивились?');
      let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?');
      let whatIsRating = +prompt('Як його оцінете по 10 бальній шкалі');

      if (lastWatchFilm && whatIsRating && lastWatchFilm.length < 50) {
         personalMovieDB.movies[lastWatchFilm] = whatIsRating;
         console.log(personalMovieDB);
      } else {
         alert('You don`t give any or enough an information about films that you watched');
         console.log(personalMovieDB);
      }
   }

   if (!numberFilms || personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
      alert('Вы классический зритель');
   } else {
      alert('Вы киноман');
   }
};


// The second solution
export const secondSolution = function () {
   for (let i = 0; i < 3; i++) {
      let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?');
      let whatIsRating = +prompt('Як його оцінете по 10 бальній шкалі');

      if (lastWatchFilm.length < 50 && !lastWatchFilm && !whatIsRating) {
         alert('You don`t give any or enough an information about films that you watched');
         console.log(personalMovieDB);
      } else {
         personalMovieDB.movies[lastWatchFilm] = whatIsRating;
         console.log(personalMovieDB);
      }
   }

   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
      alert('Вы классический зритель');
   } else {
      alert('Вы киноман');
   }
};


// The third solution
export const personalMovieDB = {
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
      let numberMovies = +prompt('Скільки фільмів ви вже подивились?');

      if (!numberMovies) {
         alert('If you don`t wathed any muvie we can`t continue');
      } else {
         let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?');
         let filmRating = +prompt('Як його оцінете по 10 бальній шкалі');

         if (!lastWatchFilm || !filmRating || lastWatchFilm.length > 50 || filmRating > 10) {
            alert("One of your answers were wrong");
         } else {
            this.count(numberMovies);
            this.movies[lastWatchFilm] = filmRating;
         }
      }
   },
};
