// First Task
function sayHello(name) {
   return 'Привіт, ' + name;
}

console.log(sayHello('Bohdan'));
// -----------

// Second Task
function returnNeighboringNumbers(number) {
   if (typeof number === 'number') {
      let numArray = [number - 1, number, number + 1];
      return numArray;
   } else {
      return NaN;
   }
}

console.log(returnNeighboringNumbers(5));
// -------------

//Third Task
function getMathResult(base, countBase) {
   let result = base + '';

   if (typeof countBase === 'string' || countBase === 0 || countBase < 0) {
      return base;
   } else if (typeof countBase === 'number') {
      let baseSum = base;

      for (let i = 1; i < countBase; i++) {
         result += '---' + (baseSum += base);
      }
      return result;
   }
}

console.log(getMathResult(5, 0));
// ------------


"use strict"

function printerError(s) {
   const aprovedLetters = "abcdefghijklm";
   let errors = 0;

   for (let i = 0; i < s.length; i++) {
      if (aprovedLetters.indexOf(s[i]) < 0) {
         errors++
      }
   }

   return `${errors}/${s.length}`;
}

const firstString = "aaabbbbhaijjjm";
const secondString = "aaaxbbbbyyhwawiwjjjwwm";

const firstCheck = printerError(firstString);
const secondCheck = printerError(secondString);

console.log(firstCheck, secondCheck);