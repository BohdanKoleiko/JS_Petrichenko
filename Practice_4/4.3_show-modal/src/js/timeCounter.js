const timeCounter = function () {
   //const today = new Date();

   //const deadline = function (endDay) {
   //   return today.setDate(today.getDate() + endDay)
   //}
   const deadline = '2023-08-04';

   const getTimeRemaining = function (endtime) {
      const t = Date.parse(endtime) - Date.now() < 0 ? 0 : Date.parse(endtime) - Date.now(),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
         minutes = Math.floor((t / 1000 / 60) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
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

         days.innerHTML = t.days;
         hours.innerHTML = t.hours;
         minutes.innerHTML = t.minutes;
         seconds.innerHTML = t.seconds;

         if (!t.total) {
            clearInterval(timeInterval);
         }
      }

      updateClock();
   }

   setClock('.timer', deadline);
}

export default timeCounter;