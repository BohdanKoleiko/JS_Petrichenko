/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против всех"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img');
    const promoBg = document.getElementsByClassName('promo__bg');
    const moviesList = document.querySelector('.promo__interactive-list');
    const bgImg = 'img/bg.jpg';
    const formAddFild = document.querySelector("form.add");

    const sortAndFilterMoviesDBArr = function (removeElement, moviesArr) {
        if (removeElement || removeElement == 0) {
            moviesArr.splice(removeElement, 1);
            return moviesArr.sort();
        } else {
            const sortedMovies = moviesArr.sort();
            return sortedMovies;
        }

    }

    const addMoviesToHTML = function (removeElement) {
        if (moviesList) {
            moviesList.innerHTML = '';

            sortAndFilterMoviesDBArr(removeElement, movieDB.movies).forEach((film, i) => {
                moviesList.innerHTML += `
                    <li class="promo__interactive-item">
                        ${i + 1}) ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });

            document.querySelectorAll(".delete").forEach((item, i) => {
                item.addEventListener("click", () => {
                    addMoviesToHTML(i);
                });
            });
        }
    }

    addMoviesToHTML();

    if (adv) {
        adv.forEach(item => {
            item.remove();
        });
    }

    if (promoBg) {
        for (let i = 0; i < promoBg[0].children.length; i++) {
            if (promoBg[0].children[i].className === 'promo__genre')
                promoBg[0].children[i].innerText = 'драма';
        }
        promoBg[0].style.cssText = `background-image: url('${bgImg}');`;
    }

    formAddFild.addEventListener("click", function (event) {

        if (event.target.nodeName.toLowerCase() === "button") {
            const getInputValue = formAddFild.querySelector(".adding__input").value;
            const checkbox = formAddFild.querySelector('input[type="checkbox"]');
            event.preventDefault();

            if (getInputValue) {
                movieDB.movies.push(getInputValue);
            }

            if (checkbox.checked) {
                alert('Добавляем любимый фильм');
            }

            addMoviesToHTML();

            event.target.parentElement.reset();
        }
    });
})
