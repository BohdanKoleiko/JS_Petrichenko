/** У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

- определение того, хватает ли бюджета на оплату такого объема;

- все числа идут без единиц измерения для упрощения, просто цифры и все;

- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект. **/

const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {
   let totalAreaStore = 0;
   let areaOneStore = 0;
   let totalArea1m3 = 0;
   let totalCostHiting = 0;

   let { shops, height, moneyPer1m3, budget } = data;

   for (let value of shops) {
      areaOneStore = value.width * value.length;
      totalAreaStore = totalAreaStore + areaOneStore;
   }

   totalArea1m3 = totalAreaStore * height;
   totalCostHiting = totalArea1m3 * moneyPer1m3;

   switch (totalCostHiting <= budget) {
      case true:
         return 'Бюджета достаточно';
      default:
         return 'Бюджета недостаточно';
   }
}

//console.log(isBudgetEnough(shoppingMallData));

// ANOTHER VARIANT OF DECISION

function isBudgetEnough2(data) {
   let totalAreaStores = 0;
   let totalHeatingCost = 0;

   data.shops.forEach(obj => {
      totalAreaStores += obj.width * obj.length;
   })

   totalHeatingCost = totalAreaStores * data.height * data.moneyPer1m3;

   switch (totalHeatingCost <= data.budget) {
      case true:
         return 'Бюджета достаточно';
      default:
         return 'Бюджета недостаточно';
   }
}

console.log(isBudgetEnough2(shoppingMallData));