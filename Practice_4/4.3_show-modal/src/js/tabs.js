const tabs = function () {
   const tabs = document.querySelectorAll('.tabheader__item');
   const tabsParent = document.querySelector('.tabheader__items');
   const tabsContent = document.querySelectorAll('.tabcontent');

   const hideTabContent = function () {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
         item.children[1].classList.remove('slide-in');
      });

      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      });
   }

   const showTabContent = function (i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabsContent[i].children[1].classList.add('slide-in');
      tabs[i].classList.add('tabheader__item_active');
   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((item, i) => {
            if (target == item) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }

   });
}

export default tabs;