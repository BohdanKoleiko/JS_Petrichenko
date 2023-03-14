//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

//Пример:

//showExperience(personalPlanPeter) => '1 month'

//P.S. желательно использовать деструктуризацию, но не обязательно

// ------------------------------------------------------------------------

//3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

//Пример:

//personalPlanPeter.showAgeAndLangs(personalPlanPeter)
//=> 'Мне 29 и я владею языками: RU ENG'

//Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.


const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: function (obj) {
      const { age } = obj;
      const { languages } = obj.skills;
      let str = languages.join(' ').toUpperCase();

      return `Мне ${age} и я владею языками: ${str}`;
   }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


const showExperience = function (obj) {

   // FIRST WAY
   //for (let value in obj) {

   //   if (value == 'exp') {
   //      return obj[value];
   //   }

   //   if (typeof obj[value] === 'object') {
   //      for (let value2 in obj[value]) {
   //         if (value2 == 'exp') {
   //            return obj[value][value2];
   //         }
   //      }
   //   }
   //}

   // SECOND WAY (shorter)
   const { exp } = obj.skills;
   return exp;
}

console.log(showExperience(personalPlanPeter));


//2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

//Пример:

//showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"

//Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

//P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {
   const { programmingLangs } = plan.skills;
   let str = '';

   for (let value in programmingLangs) {

      if (value === undefined) {
         return '';
      } else {
         str += `Язык ${value} изучен на ${programmingLangs[value]}\n`;
      }
   }
   return str;
}

console.log(showProgrammingLangs(personalPlanPeter));


const num = 51;

switch (num) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 50:
      console.log('Верно');
      break;
   default:
      console.log('Не в этот раз');
}