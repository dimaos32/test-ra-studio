// import {ieFix} from './utils/ie-fix';
// import {polyfillObjectFit} from './utils/polyfill-object-fit';

import {iosVhFix} from './utils/ios-vh-fix';

import {initMobileMenu} from './modules/init-mobile-menu';
import initAccordion from './modules/accordion';

import {initIntroSlider} from './modules/sliders/intro-slider';
import {initSeriesSlider} from './modules/sliders/series-slider';
import {initVerticalPhotoSlider} from './modules/sliders/vertical-photo-slider';
import {initPhotoSlider} from './modules/sliders/photo-slider';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // ieFix();
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  iosVhFix();

  initMobileMenu();
  initIntroSlider();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initSeriesSlider();
    initVerticalPhotoSlider();
    initPhotoSlider();
  });
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.

