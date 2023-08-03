document.addEventListener("DOMContentLoaded", () => {
   const cube = document.querySelector(".cube");

   cube.addEventListener("touchstart", (e) => {
      e.preventDefault();
      console.log('touchStart');
   });

   cube.addEventListener("touchmove", (e) => {
      e.preventDefault();
      console.log('touchmove');
   });

   cube.addEventListener("touchend", (e) => {
      e.preventDefault();
      console.log('touchend');
      console.log(e.touches);
   });
})