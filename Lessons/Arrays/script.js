'use strict'

const arr = [8, 2, 1, 6, 5];

//Методи:
arr.pop()
arr.push(10);
arr.shift();
arr.unshift(10);

console.log(arr);


//Перебор масива
//        циклом for .... in
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//        циклом for .... of
for (let value of arr) {
   console.log(value);
}

//        циклом forEach
/**
 * принимает в себя трим аргумента
 * 1 - отвечает елементу в масиве;
 * 2 - хронит индекс елемента
 * 3 - сылка на масивый который мы перебираем
 *
 * Отличаеться от for .... of тем, что нельзя использоваться continue и breck
 */
arr.forEach(function (i, count, arrLink) {
   console.log(`${i}: это индекс ${count} внутри масива ${arrLink}`);
});

//Метод строки .split()
const justTxt = 'test, msnf jhsdf, jkshdf 3223';
const txtToArray = justTxt.split(', ');
console.log(txtToArray);

//Метод масива .sort()
txtToArray.sort();

//Метод строки .join()
const revertToTxt = txtToArray.join('; ');
console.log(revertToTxt);
