'use strict'

import tabs from "./tabs";
import timeCounter from "./timeCounter";
import modal from "./modal";
import MenuCard from "./use-constructor(classes)";
import { proccessingForms, getData } from "./processingForms";

window.addEventListener("DOMContentLoaded", () => {
   tabs();
   timeCounter();
   modal();

   getData('http://localhost:3000/menu')
      .then(response => {
         response.forEach(data => {
            console.log()
            if (data.currency !== 'UAH') {
               const changeCurrency = new MenuCard(data.title, data.descr, data.img, data.altimg, data.price, data.currency, '.menu__field .container');

               changeCurrency.render();
               changeCurrency.exchangeToUAH();
            } else {
               new MenuCard(data.title, data.descr, data.img, data.altimg, data.price, data.currency, '.menu__field .container').render();
            }

         })
      });

   // Forms
   const forms = document.querySelectorAll('form');

   forms.forEach(form => {
      proccessingForms(form);
   });
});