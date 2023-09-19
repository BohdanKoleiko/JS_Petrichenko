document.addEventListener('DOMContentLoaded', () => {
   const scrollBlock = document.querySelector(".scroll-txt");
   const btn = document.querySelector('button');

   //console.log(scrollBlock.clientWidth);
   //console.log(scrollBlock.offsetWidth);
   console.log(scrollBlock.scrollHeight);

   btn.addEventListener('click', () => {
      scrollBlock.scrollTop = 0;
      console.log(`scrollTop: ${scrollBlock.scrollTop}`);
   });
});