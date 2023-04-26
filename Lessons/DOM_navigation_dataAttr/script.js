// Отримання head тега
//console.log(document.head);

// Отримання html елемента
//console.log(document.documentElement);

// Отримання Нод
//console.log(document.body.childNodes); // отримаємо всі Ноди на html сторінці
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

// Отримання батьківського елемента
//console.log(document.querySelector('#current').parentNode); // отримаємо ноду
//console.log(document.querySelector('#current').parentElement); // отримаємо елемент

//console.log(document.querySelector('#current').parentNode.parentNode); // отримаємо ноду
//console.log(document.querySelector('#current').parentElement.parentElement); // отримаємо елемент

// Отримаємо наступний елемент від отриманого
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
   if (node.nodeName === "#text" || node.nodeName === "#comment") {
      continue;
   }

   console.log(node);
}
