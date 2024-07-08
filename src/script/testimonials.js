document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      keyboard: {
          enabled: true,
          onlyInViewport: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
      effect: 'slide',
  });
});
