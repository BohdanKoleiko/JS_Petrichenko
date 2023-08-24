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
   constructor(title, text, srcImg, altTxt, price, typeCurrency, parentElem, ...classes) {
      this.title = title;
      this.text = text;
      this.srcImg = srcImg;
      this.altTxt = altTxt;
      this.price = price;
      this.typeCurrency = typeCurrency;
      this.classes = classes;
      this.parentElem = document.querySelector(parentElem);
   }

   exchangeToUAH() {
      const APIKey = 'f33b579dee802eeeff591f3e164ca910';
      const endpoint = 'latest';
      const HTTPMethod = 'GET';
      const httpRequest = new XMLHttpRequest();
      const url = `http://data.fixer.io/api/${endpoint}?access_key=${APIKey}`;
      const ourBasicPrice = this.price;
      const typeCurrency = this.typeCurrency;

      httpRequest.open(HTTPMethod, url);
      httpRequest.send();
      httpRequest.addEventListener('load', () => {
         if (httpRequest.status === 200 && httpRequest.readyState === 4) {
            const getPriceSpan = document.querySelector(`[data-price="${this.price}"] span`);
            const parsed = JSON.parse(httpRequest.response);

            if (typeCurrency !== 'UAH') {
               const calc = parsed.rates['UAH'] * ourBasicPrice;
               getPriceSpan.textContent = calc.toFixed(2);
            }
         }
      });
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
               <div class="menu__item-total" data-price='${this.price}'><span>${this.price}</span> грн/день</div>
            </div>
         `;

         menuItem.innerHTML = menuItemContent;
         this.parentElem.append(menuItem);
      }
   }
}

export default MenuCard