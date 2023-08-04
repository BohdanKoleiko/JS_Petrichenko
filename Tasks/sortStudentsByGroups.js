/**
 * У вас есть список учеников, которые хотят поиграть в игру.
 * Но команд может быть только 3 по 3 человека. 
 * Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
 * Внутри она сначала сортирует имена по алфавиту. 
 * Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
 * Эти группы должны быть массивами. 
 * Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
 */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh',
   'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Peter'];

function sortStudentsByGroups(arr) {
   if (typeof arr === 'object' && Array.isArray(arr)) {
      arr.sort();

      const sortedStudents = [];
      let tempArr = [];

      for (let i = 0; i < arr.length; i++) {
         tempArr.push(arr[i]);

         if (tempArr.length == 3) {
            sortedStudents.push(tempArr);
            tempArr = [];
         }
      }

      if (arr.length % 3 == 1 || arr.length % 3 == 2) {
         sortedStudents.push(
            `Оставшиеся студенты: ${arr.slice(arr.length - (arr.length % 3)).join(', ')}`
         );
      } else {
         sortedStudents.push('Оставшиеся студенты: -');
      }

      return sortedStudents;
   }
}

console.log(sortStudentsByGroups(students));
