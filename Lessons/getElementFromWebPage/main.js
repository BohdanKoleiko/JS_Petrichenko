'use strict';

//let count = 0;

//const box = document.getElementById('squer');
//console.log(box);

//const btns = document.getElementsByTagName('button');
//const btnsArr = [...btns];
//btnsArr.forEach((value) => {
//   value.addEventListener('click', () => {
//      if (!isNaN(+value.innerText) && +value.innerText != 0) {
//         count = +value.innerText;
//         console.log(count);
//      }
//   })
//});

//const circles = document.getElementsByClassName('circle');
//console.log(circles);

//const hearts = document.querySelectorAll('.heart');
//console.log(hearts);

//hearts.forEach((value) => {
//   let rotate = 0;
//   value.style.transition = 'all 0.5s';

//   value.addEventListener('mouseover', () => {
//      rotate += 45 * count;
//      value.style.transform = `rotate(${rotate}deg)`;
//   });
//   value.addEventListener('mouseleave', () => {
//      rotate += 45 * count;
//      value.style.transform = `rotate(${rotate}deg)`;
//   });

//});

//const heart = document.querySelector('.heart');
//console.log("This is the 'querySelector' method that gives the first similar", heart);

const box = document.getElementById('squer'),
   btns = document.getElementsByTagName('button'),
   circles = document.getElementsByClassName('circle'),
   wrapper = document.querySelector('.wrapper'),
   hearts = wrapper.querySelectorAll('.heart'),
   heart = wrapper.querySelector('.heart');

//box.style.backgroundColor = 'green';
//box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px;'

btns[0].style.borderRadius = '100%';

// Для перебору можна використати такий цикл
//for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'gray';
//}

// Або цей цикл
//hearts.forEach(item => {
//   item.style.backgroundColor = 'gray';
//})

const div = document.createElement('div');
//const text = document.createTextNode('Тут був шимпанзе');
div.classList.add('black');

wrapper.append(div); // новий спосіб
//div.append(text);
div.innerHTML = "<h3>Тут був шимпанзе</h3>";
div.insertAdjacentHTML('beforeend', "<h2>якого звали Діма</h2>");

//wrapper.appendChild(div); // старий спосіб

// Три нових способа замість одного старого
//wrapper.prepend(div); 
//hearts[0].before(div);
//hearts[0].after(div);
// Старий спосіб
//wrapper.insertBefore(div, hearts[1]);

//circles[0].remove(); // new way
//wrapper.removeChild(hearts[0]) // old way


//hearts[0].replaceWith(circles[0]);
//document.querySelector('.container').replaceChild(hearts[0], circles[0]);
