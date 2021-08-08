const mobileMenuBreakpoint = window.matchMedia('(min-width: 992px)');
const menu = document.querySelector('.main-nav');

const initMobileMenu = () => {
  if (menu) {
    const toggle = menu.querySelector('.main-nav__toggle');
    const wrapper = menu.querySelector('.main-nav__wrapper');
    const overlay = menu.querySelector('.main-nav__overlay');

    const onOverlayClick = () => {
      closeMenu();
    };

    const onEscPress = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();

        closeMenu();
      }
    };

    const onMenuClick = ({target}) => {
      if (target.closest('a')) {
        closeMenu();
      }
    };

    const breakpointChecker = () => {
      if (mobileMenuBreakpoint.matches) {
        closeMenu();
      }
    };

    const openMenu = () => {
      menu.classList.add('open');

      window.disableBodyScroll(menu, {
        reserveScrollBarGap: true,
      });

      overlay.addEventListener('click', onOverlayClick);
      wrapper.addEventListener('click', onMenuClick);
      document.addEventListener('keydown', onEscPress);
      mobileMenuBreakpoint.addListener(breakpointChecker);
    };

    const closeMenu = () => {
      menu.classList.remove('open');

      setTimeout(window.enableBodyScroll(menu), 300);

      overlay.removeEventListener('click', onOverlayClick);
      wrapper.removeEventListener('click', onMenuClick);
      document.removeEventListener('keydown', onEscPress);
      mobileMenuBreakpoint.removeListener(breakpointChecker);
    };

    const toggleMenu = () => {
      if (menu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    toggle.addEventListener('click', toggleMenu);

    breakpointChecker();
  }
};

export {initMobileMenu};
