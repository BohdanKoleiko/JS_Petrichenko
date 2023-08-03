document.addEventListener('DOMContentLoaded', () => {
   const scrollBlock = document.querySelector(".scroll-txt");
   const btn = document.querySelector('button');

   btn.addEventListener('click', () => {
      console.log(`scrollTop: ${scrollBlock.scrollTop}`);
   });
});