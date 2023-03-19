//3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

//Пример:

//const someString = 'This is some strange string';
//reverse(someString) => 'gnirts egnarts emos si sihT'

//Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

//Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

//Может показать сложной с первого взгляда, но это совсем не так 🙂

const someString = 'This is some strange string';

function reverse(str) {
   let strIntoArr;
   const reversedStr = [];

   if (typeof str === 'string') {
      strIntoArr = str.split(' ');

      for (let value of strIntoArr) {
         let newStr = '';

         for (let i = 1; i <= value.length; i++) {
            newStr += value[value.length - i];
         }

         reversedStr.unshift(newStr);
      }

      return reversedStr.join(' ');
   } else {
      return 'Ошибка!';
   }
}

console.log(reverse(someString));


//4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

//Пример:

//availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
//Вернет строку:

//Доступные валюты:
//UAH
//RUB
//Заметьте:

//- CNY (юань) исчез из списка валют, значит такая валюта закончилась

//- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

//- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку'

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

const uniteArrays = baseCurrencies.concat(additionalCurrencies)

function availableCurr(arr, missingCurr) {
   let response;
   const cleanArr = [];

   if (!arr.length) {
      response = 'Нет доступных валют';
   } else {
      for (let value of arr) {
         if (value !== missingCurr) {
            cleanArr.push(value);
         }
      }

      response = 'Доступные валюты:\n'

      cleanArr.forEach(function (value) {
         response += `${value}\n`
      })
   }

   return response;
}

console.log(availableCurr(uniteArrays, 'EUR'));