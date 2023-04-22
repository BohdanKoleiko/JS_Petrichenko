/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.getElementsByClassName('promo__bg'),
    moviesList = document.querySelector('.promo__interactive-list'),
    bgImg = 'img/bg.jpg';

if (adv) {
    adv.forEach(item => {
        item.remove()
    });
}

if (promoBg) {
    for (let i = 0; i < promoBg[0].children.length; i++) {
        if (promoBg[0].children[i].className === 'promo__genre')
            promoBg[0].children[i].innerText = 'драма';
    }
    promoBg[0].style.cssText = `background-image: url('${bgImg}');`;
}

if (moviesList) {
    const sortedMovies = movieDB.movies.sort();
    moviesList.innerHTML = '';

    sortedMovies.forEach((film, i) => {
        moviesList.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}) ${film}
                <div class="delete"></div>
            </li>
        `
    })
}

const evt = new Event("look", { "bubbles": true, "cancelable": false });
document.dispatchEvent(evt);
