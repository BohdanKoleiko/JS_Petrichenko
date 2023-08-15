class MenuCard {
   /**
    * 
    * @param {string} title card's title
    * @param {string} text description
    * @param {string} srcImg link to an image
    * @param {string} altTxt alt text for an image
    * @param {number} price price
    * @param {parentElem} parentElem parent element for cards
    * @param {classes} classes it`s possible to pass as many aditioanal css classes to card`s wrapper if you need that as possible
    */
   constructor(title, text, srcImg, altTxt, price, parentElem, ...classes) {
      this.title = title;
      this.text = text;
      this.srcImg = srcImg;
      this.altTxt = altTxt;
      this.price = price;
      this.classes = classes;
      this.parentElem = document.querySelector(parentElem);
   }

   exchangeToUAH() {
      const APIKey = 'f33b579dee802eeeff591f3e164ca910';
      const endpoint = 'latest';
      const HTTPMethod = 'GET';
      const httpRequest = new XMLHttpRequest();
      const url = `http://data.fixer.io/api/${endpoint}?access_key=${APIKey}`;
      let test;

      httpRequest.open(HTTPMethod, url);
      httpRequest.responseType = 'json';
      httpRequest.send();
      //httpRequest.addEventListener('load', getUAH);
      //let promice = new Promise(function (resolve, reject) {
      //   httpRequest.addEventListener('load', function () {
      //      let newPrice = this.response.rates.UAH
      //      resolve(newPrice);
      //   });
      //});
      //promice.then(function (data) {
      //   return data
      //});
   }

   render() {
      if (this.parentElem) {
         const menuItem = document.createElement('div');

         if (this.classes.length === 0) {
            menuItem.classList.add('menu__item');
         } else {
            this.classes.forEach(classItem => {
               menuItem.classList.add(classItem)
            });
         }

         const menuItemContent = `
            <img src=${this.srcImg} alt=${this.altTxt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;

         menuItem.innerHTML = menuItemContent;
         this.parentElem.append(menuItem);
      }
   }
}

export default MenuCard