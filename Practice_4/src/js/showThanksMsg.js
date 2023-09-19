'use strict'

function showThanksMsg(div, message) {
   const modal = document.querySelector('.modal');
   const html = document.documentElement;

   div.textContent = message;

   setTimeout(() => {
      div.remove();

      if (modal.style.display == 'block') {
         modal.style.display = 'none';
         html.style.overflow = 'visible';
      }
   }, 2000);
}

export default showThanksMsg;