const initPhotoSlider = () => {
  const sliders = document.querySelectorAll('.photo-slider');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const swiper = new Swiper('.photo-slider__wrapper', {
      loop: true,
      navigation: {
        nextEl: '.photo-slider__controls .round-slider-btn.next',
        prevEl: '.photo-slider__controls .round-slider-btn.prev',
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });
  });
};

export {initPhotoSlider};
