const initSeriesSlider = () => {
  const sliders = document.querySelectorAll('.series-slider');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const currentPage = slider.querySelector('.series-slider__fraction--current-page');
    const totalPages = slider.querySelector('.series-slider__fraction--total-pages');

    const swiper = new Swiper('.series-slider__wrapper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 35,
      speed: 600,
      scrollbar: {
        el: '.series-slider__scrollbar',
      },
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });

    totalPages.textContent = Math.ceil(swiper.slides.length / swiper.passedParams.slidesPerGroup) < 10 ?
      '0' + Math.ceil(swiper.slides.length / swiper.passedParams.slidesPerGroup) :
      Math.ceil(swiper.slides.length / swiper.passedParams.slidesPerGroup);

    swiper.on('slideChange', () => {
      const newCurrentSlide = Math.ceil(swiper.realIndex / swiper.passedParams.slidesPerGroup + 1) < 10 ?
        '0' + Math.ceil(swiper.realIndex / swiper.passedParams.slidesPerGroup + 1) :
        Math.ceil(swiper.realIndex / swiper.passedParams.slidesPerGroup + 1);
      currentPage.textContent = newCurrentSlide;
    });
  });
};

export {initSeriesSlider};
