// First solution
function fib(num) {
   if (!Number.isInteger(num) || typeof num === 'string' || num < 0) {
      return ''
   } else {
      const numArr = [];
      for (let i = 0; i < num; i++) {
         if (i === 0 || i === 1) {
            numArr.push(i)
         } else {
            numArr.push(numArr[i - 1] + numArr[i - 2])
         }
      }
      return numArr.join(' ');
   }
}