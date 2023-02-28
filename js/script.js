var swiper = new Swiper(".cases-container", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      520: {
        slidesPerView: 2,
      },
      995: {
        slidesPerView: 3
      },
      1025: {
        slidesPerView: 4
      }
    }
  });