// First Task
function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];

   // Пишем решение вот тут
   for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
   }

   // Не трогаем
   return result;
}
console.log(firstTask());
// First Task


// Second Task
function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   // Пишем решение вот тут
   for (let i in data) {
      if (i < data.length) {
         if (typeof data[i] === 'string') {
            data[i] += " - done";
         } else {
            data[i] *= 2;
         }
      }
   }

   // Не трогаем
   return data;
}
console.log(secondTask());
// Second Task


// Third Task
function thirdTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   // Пишем решение вот тут
   for (let i = 1; i <= data.length; i++) {
      result[i - 1] = data[data.length - i];
   }

   // Не трогаем
   return result;
}
console.log(thirdTask());
// Third Task
