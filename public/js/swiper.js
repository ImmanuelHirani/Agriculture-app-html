const mod1Swiper = new Swiper(".mod-1-swiper", {
  // Core configuration
  speed: 650, // Optimal balance between speed and smoothness
  parallax: true,
  // autoHeight: true, // Responsive height adjustment
  watchSlidesProgress: true,
  resistanceRatio: 0.5, // Improved touch/swipe resistance
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  lazy: {
    loadPrevNext: true,
  },

  // Navigation enhancements
  navigation: {
    nextEl: ".button-next-hero",
    prevEl: ".button-prev-hero",
    // disabledClass: "swiper-button-disabled opacity-30 cursor-not-allowed",
  },

  // Pagination improvements
  pagination: {
    el: ".pagination-mod-1",
    clickable: true,
    // bulletClass: "swiper-pagination-bullet bg-white/40 mx-1.5 !w-3 !h-3",
    // bulletActiveClass: "!bg-white !w-8 scale-100",
    renderBullet: function (index, className) {
      return `
        <div class="${className} transition-all duration-300 ease-out rounded-full cursor-pointer">
          <span class="sr-only">Navigate to slide ${index + 1}</span>
        </div>
      `;
    },
  },

  // Parallax configuration
  parallax: {
    enabled: true,
  },

  // Optional autoplay (uncomment if needed)
  /*
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  */

  // Accessibility features
  a11y: {
    enabled: true,
    prevSlideMessage: "Previous hero slide",
    nextSlideMessage: "Next hero slide",
    firstSlideMessage: "This is the first hero slide",
    lastSlideMessage: "This is the last hero slide",
    paginationBulletMessage: "Go to hero slide {{index}}",
  },

  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },

  // Touch interactions
  touchEventsTarget: "container",
  threshold: 10,
  touchAngle: 30,
  grabCursor: true,
  followFinger: false,

  // Optional breakpoints (adjust based on your needs)
  breakpoints: {
    640: {
      autoHeight: false,
      parallax: {
        enabled: true,
        transition: 25,
      },
    },
    1024: {
      parallax: {
        enabled: true,
        transition: 35,
      },
    },
  },
});

// Initialize Swiper
const mod2Swiper = new Swiper(".mod-2-swiper", {
  // Core configuration
  speed: 600, // Smoother transition speed
  autoHeight: true, // Better responsive height handling
  watchSlidesProgress: true,
  resistanceRatio: 0.6, // Better touch resistance
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  // Navigation
  navigation: {
    nextEl: ".button-next-mod-2",
    prevEl: ".button-prev-mod-2",
    // disabledClass: "swiper-button-disabled opacity-50 pointer-events-none",
  },

  lazy: {
    loadPrevNext: true,
  },

  // Pagination improvements
  pagination: {
    el: ".pagination-mod-2",
    clickable: true,
    // bulletClass: "swiper-pagination-bullet bg-white/40 mx-1.5 !w-2.5 !h-2.5",
    // bulletActiveClass: "!bg-white !w-6 scale-100",
    renderBullet: function (index, className) {
      return `
        <div class="${className} transition-all duration-300 ease-out rounded-full cursor-pointer">
          <span class="sr-only">Go to slide ${index + 1}</span>
        </div>
      `;
    },
  },

  // Autoplay enhancements
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Responsive breakpoints
  breakpoints: {
    360: {
      // Mobile-first
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      // Tablet
      slidesPerView: 1.2,
      spaceBetween: 20,
      // centeredSlides: true,
    },
    1024: {
      // Desktop
      slidesPerView: 1.5,
      spaceBetween: 24,
      // centeredSlides: false,
    },
    1280: {
      // Large desktop
      slidesPerView: 2,
      spaceBetween: 32,
      // slidesPerGroup: 2,
    },
  },

  // Accessibility
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    paginationBulletMessage: "Go to slide {{index}}",
  },

  // Transition effects
  effect: "slide",
  fadeEffect: {
    crossFade: true,
  },
  followFinger: false,
  threshold: 15,

  // Keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // Touch interactions
  touchEventsTarget: "container",
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: false,
  longSwipesRatio: 0.5,
  grabCursor: true,
});

const mod5Swiper = new Swiper(".mod-5-swiper", {
  // Infinite loop configuration
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Autoplay configuration
  // autoplay: {
  //   delay: 1, // Minimal delay for continuous movement
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  //   waitForTransition: false, // Don't wait for transition to complete
  // },

  // Speed configuration for smooth continuous movement
  speed: 2000, // Match this with CSS transition duration
  // followFinger: false,
  // allowTouchMove: false,

  // Core configuration
  autoHeight: true,
  resistanceRatio: 0,
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,

  // Responsive breakpoints
  breakpoints: {
    360: {
      // Mobile-first
      slidesPerView: 1.2,
      spaceBetween: 8,
      centeredSlides: true,
    },
    768: {
      // Tablet
      slidesPerView: 1.5,
      spaceBetween: 14,
      centeredSlides: true,
    },
    1024: {
      // Desktop
      slidesPerView: 1.5,
      spaceBetween: 24,
      centeredSlides: false,
    },
    1280: {
      // Large desktop
      slidesPerView: 4,
      spaceBetween: 8,
      // slidesPerGroup: 2,
    },
  },

  // Transition effects
  effect: "slide",
  grabCursor: true,

  // Disable manual control features
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",
});

const mod6Swiper = new Swiper(".mod-6-swiper", {
  // Infinite loop configuration
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Autoplay configuration
  // autoplay: {
  //   delay: 1, // Minimal delay for continuous movement
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  //   waitForTransition: false, // Don't wait for transition to complete
  // },

  // Speed configuration for smooth continuous movement
  speed: 600, // Match this with CSS transition duration
  // followFinger: false,
  // allowTouchMove: false,

  // // Core configuration
  // autoHeight: true,
  resistanceRatio: 0,
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,

  // Responsive breakpoints
  breakpoints: {
    360: {
      // Mobile-first
      slidesPerView: 1.2,
      spaceBetween: 8,
      centeredSlides: true,
    },
    768: {
      // Tablet
      slidesPerView: 1.5,
      spaceBetween: 14,
      centeredSlides: true,
    },
    1024: {
      // Desktop
      slidesPerView: 1.5,
      spaceBetween: 24,
      centeredSlides: false,
    },
    1280: {
      // Large desktop
      slidesPerView: 4,
      spaceBetween: 8,
      // slidesPerGroup: 2,
    },
  },

  // Pagination improvements
  pagination: {
    el: ".pagination-mod-6",
    clickable: true,
    // bulletClass: "swiper-pagination-bullet bg-white/40 mx-1.5 !w-2.5 !h-2.5",
    // bulletActiveClass: "!bg-white !w-6 scale-100",
  },

  // Transition effects
  effect: "slide",
  grabCursor: true,

  // Disable manual control features
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",
});

const mod7Swiper = new Swiper(".mod-7-swiper", {
  loop: false,
  slidesPerView: 1,
  speed: 600,
  resistanceRatio: 0,
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    640: {
      spaceBetween: 20,
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 2, // Pastikan hanya berpindah 1 slide
    },
    1024: {
      allowTouchMove: false, // Disable dragging
      spaceBetween: 20,
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 1, // Pastikan hanya berpindah 1 slide
    },
    1280: {
      allowTouchMove: false, // Disable dragging
      spaceBetween: 20,
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 4, // Pastikan hanya berpindah 1 slide
    },
  },
});

const mod8Swiper = new Swiper(".mod-8-swiper", {
  loop: false,
  slidesPerView: 1.1,
  spaceBetween: 8,
  speed: 600,
  resistanceRatio: 0,
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,

  // Navigation enhancements
  navigation: {
    nextEl: ".button-next-product",
    prevEl: ".button-prev-product",
    // disabledClass: "swiper-button-disabled opacity-30 cursor-not-allowed",
  },

  breakpoints: {
    640: {
      spaceBetween: 20,
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 2, // Pastikan hanya berpindah 1 slide
    },
    1024: {
      allowTouchMove: false, // Disable dragging
      spaceBetween: 20,
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 1, // Pastikan hanya berpindah 1 slide
    },
    1280: {
      spaceBetween: 8,
      slidesPerView: 4,
    },
  },
});

const mod9Swiper = new Swiper(".mod-9-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,

  // Autoplay configuration
  // autoplay: {
  //   delay: 1, // Minimal delay for continuous movement
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  //   waitForTransition: false, // Don't wait for transition to complete
  // },

  // Speed configuration for smooth continuous movement
  speed: 600, // Match this with CSS transition duration
  // followFinger: false,
  // allowTouchMove: false,

  // // Core configuration
  // autoHeight: true,
  resistanceRatio: 0,
  updateOnWindowResize: true,
  observer: true,
  observeParents: true,

  // Responsive breakpoints
  breakpoints: {
    360: {
      // Mobile-first
      slidesPerView: 1.2,
      spaceBetween: 8,
    },
    768: {
      // Tablet
      slidesPerView: 2.1,
      spaceBetween: 14,
    },
    1024: {
      // Desktop
      slidesPerView: 1.5,
      spaceBetween: 24,
      centeredSlides: false,
    },
    1280: {
      // Large desktop
      slidesPerView: 3.1,
      spaceBetween: 8,
      // slidesPerGroup: 2,
    },
  },

  // Pagination improvements
  pagination: {
    el: ".pagination-mod-9",
    clickable: true,
    // bulletClass: "swiper-pagination-bullet bg-white/40 mx-1.5 !w-2.5 !h-2.5",
    // bulletActiveClass: "!bg-white !w-6 scale-100",
  },

  // Transition effects
  effect: "slide",
  grabCursor: true,

  // Disable manual control features
  // noSwiping: true,
  // noSwipingClass: "swiper-slide",
});

// Tambahkan event listener untuk memastikan perpindahan ke item berikutnya

// Force continuous autoplay reset
// mod5Swiper.on("slideChange", function () {
//   if (!this.autoplay.running) {
//     this.autoplay.start();
//   }
// });

// // Manual hover control (extra insurance)
// const swiperContainer = document.querySelector(".mod-5-swiper");
// swiperContainer.addEventListener("mouseenter", () => {
//   mod5Swiper.autoplay.stop();
// });
// swiperContainer.addEventListener("mouseleave", () => {
//   mod5Swiper.autoplay.start();
// });
