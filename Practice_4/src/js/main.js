'use strict'

import tabs from "./tabs";
import timeCounter from "./timeCounter";
import modal from "./modal";
import MenuCard from "./use-constructor(classes)";

window.addEventListener("DOMContentLoaded", () => {
   tabs();
   timeCounter();
   //modal();

   new MenuCard(
      'Меню "Фитнес"',
      'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      'img/tabs/vegy.jpg',
      'vegy',
      229,
      '.menu__field .container'
   ).render();

   new MenuCard('Меню “Премиум”',
      'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      'img/tabs/elite.jpg',
      'elite',
      550,
      '.menu__field .container'
   ).render();


   const menuLean = new MenuCard('Меню "Постное"',
      'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 'img/tabs/post.jpg',
      'lean',
      430,
      '.menu__field .container'
   );

   menuLean.render();
});