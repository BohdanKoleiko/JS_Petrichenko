// My Decision
let result = '';
const strLength = 6;

for (let i = 1; i <= strLength; i++) {
   for (let j = 0; j < strLength - i; j++) {
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
// My Decision


const lines = 5;
let teacherResult = '';

for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      teacherResult += " ";
   }
   for (let k = 0; k < 2 * i + 1; k++) {
      teacherResult += "*";
   }
   teacherResult += "\n";
}

console.log(teacherResult);