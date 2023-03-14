//2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   for (let key of arr) {
      console.log(key.toLowerCase());
   }
}

standardizeStrings(favoriteCities);