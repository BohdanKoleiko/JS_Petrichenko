'use strict'

const slider = () => {
   const slides = document.querySelectorAll('.offer__slide');
   const slidersWrapper = document.querySelector('.offer__slider-wrapper');
   const visibleWidth = slidersWrapper.offsetWidth;

   const prevSlider = document.querySelector('.offer__slider-prev');
   const nextSlider = document.querySelector('.offer__slider-next');
   const currentNum = document.querySelector('#current');
   const totalNum = document.querySelector('#total');

   const sliderSpace = 20;
   let counter = 1;
   let baseSlidePosition = 0;


   function addCSS(slideWrap, totalSlidesNum) {
      totalSlidesNum.innerText = slides.length < 10 ? `0${slides.length}` : slides.length;

      slideWrap.style.cssText = 'display: flex; overflow: hidden;';

      for (let i = 0; i < slides.length; i++) {
         slides[i].style.cssText = `flex: 1 0 100%; transition: transform 0.6s ease-in-out; margin-right: ${sliderSpace}px`;
      }
   }

   addCSS(slidersWrapper, totalNum);


   function initSlider(currentSliderNum, activeSlide = 1) {
      currentSliderNum.innerText = activeSlide < 10 ? `0${activeSlide}` : activeSlide;
   }
   initSlider(currentNum);


   nextSlider.addEventListener('click', () => {
      if (counter > (slides.length - 1)) {
         counter = 1;
         baseSlidePosition = 0;
      } else {
         counter++;
         baseSlidePosition = (baseSlidePosition - visibleWidth) - sliderSpace;
      }

      initSlider(currentNum, counter);

      for (let i = 0; i < slides.length; i++) {
         slides[i].style.transform = `translateX(${baseSlidePosition}px)`;
      }


      //if (counter < slides.length) {
      //counter++;
      //baseSlidePosition = (baseSlidePosition - visibleWidth) - sliderSpace;

      //initSlider(currentNum, counter);

      //for (let i = 0; i < slides.length; i++) {
      //   slides[i].style.transform = `translateX(${baseSlidePosition}px)`;
      //}
      //}
   });

   prevSlider.addEventListener('click', () => {
      if (counter < 2) {
         counter = slides.length;
         baseSlidePosition = ((visibleWidth + sliderSpace) * (slides.length - 1)) / -1;
      } else {
         counter--;
         baseSlidePosition = (baseSlidePosition + visibleWidth) + sliderSpace;
      }

      initSlider(currentNum, counter);

      for (let i = 0; i < slides.length; i++) {
         slides[i].style.transform = `translateX(${baseSlidePosition}px)`;
      }


      //if (counter > 1) {
      //   counter--;
      //   initSlider(currentNum, counter);
      //   baseSlidePosition = (baseSlidePosition + visibleWidth) + sliderSpace;

      //   for (let i = 0; i < slides.length; i++) {
      //      slides[i].style.transform = `translateX(${baseSlidePosition}px)`;
      //   }
      //}
   });
}

export default slider;