// Initialize Swiper
var swiper = new Swiper(".mod-1-swiper", {
  speed: 800,
  parallax: true,
  navigation: {
    nextEl: ".button-next-hero",
    prevEl: ".button-prev-hero",
  },
  pagination: {
    el: ".pagination-mod-1",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} w-4 h-4 rounded-full cursor-pointer"></div>`;
    },
  },
});

// Initialize Swiper
var swiper = new Swiper(".mod-2-swiper", {
  speed: 800,
  // loop : true,
  preventClicksPropagation: true,
  spaceBetween: 24,
  observer: true,
  speed: 800, // Slide transition speed

  autoplay: {
    delay: 12000, // Delay between autoplay slides
  },

  navigation: {
    nextEl: ".button-next-mod-2",
    prevEl: ".button-prev-mod-2",
  },

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1380: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
  },

  pagination: {
    el: ".pagination-mod-2",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className} w-4 h-4 rounded-full  cursor-pointer"></div>`;
    },
  },
});
