const startAnimationBtn = document.querySelector(".start-animation");

// setTimeout
//startAnimationBtn.addEventListener('click', () => {
//   setTimeout(logger, 1000);
//});

//function logger() {
//   console.log('Hello');
//}


// setInteval
//let setIntervalId,
//   counter = 0;

//startAnimationBtn.addEventListener('click', () => {
//   setIntervalId = setInterval(logger, 1000);
//});

//function logger() {
//   if (counter == 3) {
//      clearInterval(setIntervalId);
//   } else {
//      console.log('Hello');
//      counter++;
//   }
//}


// CUBE ANIMATION
const cubeAnimation = function () {
   const cube = document.querySelector(".box__cube");
   let position = 0;

   const id = setInterval(frame, 5);

   function frame() {
      if (position == 300) {
         clearInterval(id);
      } else {
         cube.style.top = position + 'px';
         cube.style.left = position + 'px';
         position++;
      }
   }
}

startAnimationBtn.addEventListener('click', cubeAnimation);