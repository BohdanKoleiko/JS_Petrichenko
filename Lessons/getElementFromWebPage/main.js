'use strict';

let count = 0;

const box = document.getElementById('squer');
console.log(box);

const btns = document.getElementsByTagName('button');
const btnsArr = [...btns];
btnsArr.forEach((value) => {
   value.addEventListener('click', () => {
      if (!isNaN(+value.innerText) && +value.innerText != 0) {
         count = +value.innerText;
         console.log(count);
      }
   })
});

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach((value) => {
   let rotate = 0;
   value.style.transition = 'all 0.5s';

   value.addEventListener('mouseover', () => {
      rotate += 45 * count;
      value.style.transform = `rotate(${rotate}deg)`;
   });
   value.addEventListener('mouseleave', () => {
      rotate += 45 * count;
      value.style.transform = `rotate(${rotate}deg)`;
   });

});

const heart = document.querySelector('.heart');
console.log("This is the 'querySelector' method that gives the first similar", heart);
