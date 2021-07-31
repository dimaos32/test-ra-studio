const initSeriesSlider = () => {
  const sliders = document.querySelectorAll('.series-slider');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const currentPage = slider.querySelector('.series-slider__fraction--current-page');
    const totalPages = slider.querySelector('.series-slider__fraction--total-pages');

    const swiper = new Swiper('.series-slider__wrapper', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 35,
      speed: 600,
      scrollbar: {
        el: '.series-slider__scrollbar',
      },
    });

    totalPages.textContent = Math.ceil(swiper.slides.length / 3) < 10 ?
      '0' + Math.ceil(swiper.slides.length / 3) :
      Math.ceil(swiper.slides.length / 3);

    swiper.on('slideChange', () => {
      const newCurrentSlide = Math.ceil(swiper.realIndex / 3 + 1) < 10 ?
        '0' + Math.ceil(swiper.realIndex / 3 + 1) :
        Math.ceil(swiper.realIndex / 3 + 1);
      currentPage.textContent = newCurrentSlide;
    });
  });
};

export {initSeriesSlider};
