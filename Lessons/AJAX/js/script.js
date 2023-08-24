'use strict'

document.addEventListener('DOMContentLoaded', () => {

   const inputUSD = document.getElementById('usd');
   const inputUAH = document.getElementById('uah');
   const form = document.querySelector('form');

   inputUAH.addEventListener('input', function () {

      const request = new XMLHttpRequest();

      request.open('GET', 'js/current.json');
      request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');
      request.send();

      //status
      //console.log(request.status);

      //statusText
      //console.log(request.statusText);

      //response
      //console.log(request.response);

      //readyState
      //console.log(request.readyState);

      request.addEventListener('readystatechange', () => {
         if (request.readyState === 4 && request.status === 200) {
            const usdCurrency = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / usdCurrency.current.usd).toFixed(2);
         }
      });

   })

   const formData = new FormData(form);
   formData.append("name", "Bohdan");
   for (let key of formData.keys()) {
      console.log(key, formData.get(key));
   }

});