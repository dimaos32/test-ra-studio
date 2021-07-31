const initIntroSlider = () => {
  const sliders = document.querySelectorAll('.intro-slider');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const swiper = new Swiper('.intro-slider__wrapper', {
      loop: true,
      navigation: {
        nextEl: '.intro-slider__controls .round-slider-btn.next',
        prevEl: '.intro-slider__controls .round-slider-btn.prev',
      },
      pagination: {
        el: '.intro-slider__pagination',
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });
  });
};

export {initIntroSlider};
