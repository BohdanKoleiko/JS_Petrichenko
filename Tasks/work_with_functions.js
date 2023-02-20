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

