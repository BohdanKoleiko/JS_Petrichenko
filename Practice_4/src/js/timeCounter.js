const timeCounter = function () {
   //const today = new Date();

   //const deadline = function (endDay) {
   //   return today.setDate(today.getDate() + endDay)
   //}
   const deadline = '2023-08-28';

   const getTimeRemaining = function (endtime) {
      // Перший крок
      const t = Date.parse(endtime) - Date.now();
      // the first we parse a data of "endtime" variable to get the result in a milliseconds
      // then we get the result in milliseconds of the current day and hours
      // then we subtract(відняти) milliseconds of current day from milliseconds of the last day
      // then assign execution of expression to 't' variable

      let days = 0,
         hours = 0,
         minutes = 0,
         seconds = 0;

      if (t > 0) {
         // Другий крок
         // to get days, hours, minutes and seconds we need to transform millisecods
         days = Math.floor(t / 1000 / 60 / 60 / 24);
         // 1000 is a number of milliseconds in a second
         // 60 is a number of seconds in a minute
         // next 60 is a number of minutes in an hour
         // 24 is a number of hours in a day

         hours = Math.floor((t / 1000 / 60 / 60) % 24);
         // here we use % operator to get whole part from (t / 1000 / 60 / 60) result but not higher than 24 hourse per day

         minutes = Math.floor((t / 1000 / 60) % 60);
         // the same as above but now we should get minutes so we use divide з остатком на 60 because we have 60 minutes in an hour

         seconds = Math.floor((t / 1000) % 60);
      }

      const time = { total: t, days, hours, minutes, seconds }

      return time;
   }

   const getZero = (num) => {
      if (!isNaN(num) || num || num > 0) {
         if (num < 10) {
            return `0${num}`;
         } else {
            return num;
         }
      }
   }

   const setClock = function (selector, endTime) {
      const timer = document.querySelector(selector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      function updateClock() {
         const t = getTimeRemaining(endTime);

         if (t.total < 0 || !t.total) {
            clearInterval(timeInterval);
         }

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);
      }

      updateClock();
   }

   setClock('.timer', deadline);
}

export default timeCounter;