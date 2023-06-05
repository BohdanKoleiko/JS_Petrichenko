const lines = 6;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 1; i <= lines; i++) {
   for (let j = 0; j < (lines - i); j++) {
      result += ' ';
   }

   for (let k = 0; k < i; k++) {
      result += '*';
   }

   for (let l = 1; l < i; l++) {
      result += '*';
   }

   result += '\n';
}
console.log(result);
