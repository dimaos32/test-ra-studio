const initVerticalPhotoSlider = () => {
  const sliders = document.querySelectorAll('.vertical-photo-slider');

  if (!sliders) {
    return;
  }

  sliders.forEach((slider) => {
    const wrapper = slider.querySelectorAll('.vertical-photo-slider__wrapper');
    const swiper = new Swiper(wrapper, {
      loop: true,
      direction: 'vertical',
      pagination: {
        el: '.vertical-photo-slider__pagination',
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

export {initVerticalPhotoSlider};
