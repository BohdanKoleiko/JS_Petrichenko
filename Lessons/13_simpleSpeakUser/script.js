const mainTitle = document.querySelector("main h1"),
   details = document.querySelector("details"),
   carType = details.querySelectorAll("ul li"),
   carSummary = details.querySelector("span"),
   carsImg = document.querySelectorAll('.cars-img figure');

const user = (question) => {
   const answer = prompt(question, "");
   if (answer) {
      let upperFirstLetter = answer[0].toUpperCase();
      return upperFirstLetter + answer.slice(1).toLowerCase();
   } else {
      return "";
   }
};


document.addEventListener('DOMContentLoaded', () => {

   details.addEventListener('toggle', (e) => {
      if (details.open) {
         details.style.cssText = 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;';
      } else {
         details.style.cssText = 'border-radius: 20px;';
      }
   })

   carType.forEach((item, i) => {
      item.addEventListener("click", function () {
         carSummary.innerText = item.innerText;
         for (let f = 0; f < carsImg.length; f++) {
            if (f === i) {
               carsImg[f].style.cssText = 'display: block;';
            } else {
               carsImg[f].style.cssText = 'display: none;';
            }
         }
         details.attributes.removeNamedItem("open");
      });
   });
})
