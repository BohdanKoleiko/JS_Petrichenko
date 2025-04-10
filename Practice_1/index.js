/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

const activateAskingButton = document.getElementById("activate-asking");
const table = document.querySelector("table");
const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

activateAskingButton.addEventListener("click", () => {
   const userIsReady = confirm("Виготові відповісти на питання?");

   if (userIsReady) {
      const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
      personalMovieDB.count = numberOfFilms;

      for (let i = 0; i < 2; i++) {
         const lastWatchedMovie = prompt("Один из последних просмотренных фильмов?");
         const userAssess = prompt("На сколько оцените его?");

         personalMovieDB.movies[lastWatchedMovie] = userAssess;
      }

      if (Object.keys(personalMovieDB.movies)) {
         Object.entries(personalMovieDB.movies).map((movie) => {
            const row = document.createElement("tr");
            const movieCell = document.createElement("td");
            movieCell.innerText = movie[0];
            const markCell = document.createElement("td");
            markCell.innerText = movie[1];
            row.append(movieCell);
            row.append(markCell);
            table.append(row);
         });
      }
   }
});
