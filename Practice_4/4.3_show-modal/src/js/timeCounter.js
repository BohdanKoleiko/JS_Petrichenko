const timeCounter = function () {
   //const today = new Date();

   //const deadline = function (endDay) {
   //   return today.setDate(today.getDate() + endDay)
   //}
   const deadline = '2023-08-20';

   const getTimeRemaining = function (endtime) {
      const t = Date.parse(endtime) - Date.now();
      let days = 0,
         hours = 0,
         minutes = 0,
         seconds = 0;

      if (t > 0) {
         days = Math.floor(t / (1000 * 60 * 60 * 24));
         hours = Math.floor((t / (1000 * 60 * 60)) % 24);
         minutes = Math.floor((t / 1000 / 60) % 60);
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

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total < 0 || !t.total) {
            clearInterval(timeInterval);
         }
      }

      updateClock();
   }

   setClock('.timer', deadline);
}

export default timeCounter;