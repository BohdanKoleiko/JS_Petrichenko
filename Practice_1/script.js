/* Задание на урок:
// ч.1

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

'use strict';


// 1)
//const numberOfFilms = prompt('Скільки фільмів ви вже подивились?');

// 2)
//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false,
//};

/*
// 3)
const movies = function () {
    let lastWatchFilm = prompt('Один із останніх переглянутих фільмів?');
    let whatIsRating = +prompt('Як його оцінете по 10 бальній шкалі');
    personalMovieDB.movies[lastWatchFilm] = whatIsRating;
};

movies();
movies();

console.log(personalMovieDB);
*/

// ч.2

// The first solution
/*
const firstSolution = function () {
    for (let i = 0; i < 3; i++) {
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
};

firstSolution();
*/

// The second solution
/*
const secondSolution = function () {
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
};

secondSolution();
*/

// The third solution
const personalMovieDB = {
    count: undefined,
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

            this.count = numberMovies;

            if (!lastWatchFilm || !filmRating && lastWatchFilm.length > 50 || filmRating > 10) {
                alert("One of your answers were wrong");
            } else {
                this.movies[lastWatchFilm] = filmRating;
            }
        }

    },
};

personalMovieDB.askAboutMovie();

console.log(personalMovieDB);
