const initCustomDesignSlider = () => {
  const sliders = document.querySelectorAll('.custom-design-slider');

  if (!sliders) {
    return;
  }

  sliders.forEach(() => {
    const swiper = new Swiper('.custom-design-slider__wrapper', {
      loop: true,
      direction: 'vertical',
      pagination: {
        el: '.custom-design-slider__pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return index + 1 < 10 ?
            `<span class=${className}>0${index + 1}</span>` :
            `<span class=${className}>${index + 1}</span>`;
        },
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });
  });
};

export {initCustomDesignSlider};
