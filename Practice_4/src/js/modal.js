'use strict'

const modal = function () {
   const modal = document.querySelector('.modal');
   const modalCloseBtn = document.querySelector('[data-modal-close]');
   const modalOpenBtn = document.querySelectorAll('[data-modal]');
   const html = document.documentElement;


   const listenBtnAction = (event) => {
      if (event.code === 'Escape') {
         closeModalWindow();
      }
   }

   const closeModalWindow = () => {
      modal.style.display = 'none';
      html.style.overflow = 'visible';

      document.removeEventListener('keydown', listenBtnAction);
   }

   const openModalWindow = () => {
      modal.style.display = 'block';
      html.style.overflow = 'hidden';
      document.addEventListener('keydown', listenBtnAction);
      clearInterval(timerModalID);

      window.removeEventListener('scroll', showModalByScroll);
   }

   modalOpenBtn.forEach(item => {
      item.addEventListener('click', openModalWindow);
   });

   modalCloseBtn.addEventListener('click', closeModalWindow);

   modal.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('modal')) {
         closeModalWindow();
      }
   });

   const timerModalID = setInterval(openModalWindow, 5000);

   function showModalByScroll() {
      if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
         openModalWindow();
         window.removeEventListener('scroll', showModalByScroll);
      }
   }

   window.addEventListener('scroll', showModalByScroll);
}

export default modal;