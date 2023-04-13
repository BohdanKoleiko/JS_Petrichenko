'use strict';

const box = document.getElementById('squer');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach((value) => {
   let rotate = 0;
   value.style.transition = 'all 0.5s';

   value.addEventListener('mouseover', () => {
      value.style.transform = `rotate(${rotate += 45}deg)`;
   });
   value.addEventListener('mouseleave', () => {
      value.style.transform = `rotate(${rotate += 45}deg)`;
   });

});

const heart = document.querySelector('.heart');
console.log("This is the 'querySelector' method that gives the first similar", heart);
