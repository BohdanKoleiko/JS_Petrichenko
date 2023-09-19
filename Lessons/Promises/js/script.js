'use strict'


//let newPromise = new Promise(function (resolve, reject) {
//   const userResponse = prompt('What is your name?:');

//   if (userResponse) {
//      resolve(userResponse);
//   } else {
//      reject("A user wrote anything");
//   }
//})
//   .then(response => {
//      setTimeout(() => console.log(response), 2000);
//   })
//   .catch(error => {
//      console.log(error);
//   });


//function delay(ms) {
//   if (typeof ms === 'number' && !isNaN(ms)) {
//      return new Promise(resolve => setTimeout(resolve, ms));
//   }
//}

//function benchMark(callbackFn, time) {
//   new Promise(resolve => {
//      const before = Date.now();

//      callbackFn(time).then(() => resolve(before));
//   }).then((before) => {
//      const after = Date.now();
//      console.log(`виконалось через ${Math.round((after - before) / 1000)} секунди`)
//   });
//}

//benchMark(delay, 3000);

document.addEventListener("DOMContentLoaded", () => {
   const circle = document.querySelector('.circle');

   const showCircle = function (cx, cy, radius, callback) {
      circle.style.width = 0;
      circle.style.height = 0;
      circle.style.top = `${cy}%`;
      circle.style.left = `${cx}%`;

      return new Promise(resolve => {
         setTimeout(() => {
            circle.style.width = `${radius}px`;
            circle.style.height = `${radius}px`;

            circle.addEventListener("transitionend", function hundler() {
               circle.removeEventListener("transitionend", hundler);
               resolve(circle);
            });
         }, 1000);
      });
   }

   showCircle(50, 50, 200)
      .then(circle => {
         setTimeout(() => {
            circle.classList.add('message');
            circle.append("Just a text");
         }, 200);
      });
});