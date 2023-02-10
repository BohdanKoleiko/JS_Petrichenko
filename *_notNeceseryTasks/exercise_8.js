/*
   1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

   Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

   Пример:
      1. getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
      2. getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
      3. getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
      4. getTimeFromMinutes(-150) => "Ошибка, проверьте данные"


   1 - час
   2, 3, 4 - часа
   5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 - часов
   21 - час
*/

function getTimeFromMinutes(item) {
   const hoursResult = Math.floor(item / 60);
   const minuteResult = item % 60;

   if (item % 1 !== 0 || typeof item === 'string' || item < 0) {
      return 'Ошибка, проверьте данные';
   }

   if (hoursResult === 1) {
      return `Это ${hoursResult} час и ${minuteResult} минут`;
   } else if (hoursResult === 2 || hoursResult === 3 || hoursResult === 4) {
      return `Это ${hoursResult} часа и ${minuteResult} минут`;
   } else {
      return `Это ${hoursResult} часов и ${minuteResult} минут`;
   }
}

console.log(getTimeFromMinutes(180));

/*
   2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

   Пример:

   findMaxNumber(1, 5, 6.6, 11); =>  11

   findMaxNumber(1, 5, '6', '10');  =>  0
*/

function findMaxNumber(item1, item2, item3, item4) {
   const numArr = [item1, item2, item3, item4];
   let sum = 0;

   for (let i in numArr) {

      if (typeof numArr[i] === 'string' || !numArr[i]) {
         return 0;
      }

      if (sum < numArr[i]) {
         sum = numArr[i];
      }
   }

   return sum;
}

console.log(findMaxNumber(1, 5, 6, 4));