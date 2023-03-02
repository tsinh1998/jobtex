if ($("div").hasClass("swiper")) {
  var swiper = new Swiper(".tes-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      clickable: true,
      nextEl: ".button-tes-next",
      prevEl: ".button-tes-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
 }

 if ($("div").hasClass("swiper")) {
   var swiper = new Swiper(".location-slider", {
     loop: true,
     slidesPerView: 1,
     spaceBetween: 19.5,
     navigation: {
       clickable: true,
       nextEl: ".button-lo-next",
       prevEl: ".button-lo-prev",
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     breakpoints: {
       600: {
         slidesPerView: 2,
         spaceBetween: 19.5,
       },
       992: {
         slidesPerView: 3,
         spaceBetween: 19.5,
       },
       1200: {
         slidesPerView: 4,
         spaceBetween: 19.5,
       },
     },
   });
 }

 if ($("div").hasClass("swiper")) {
   var swiper = new Swiper(".jobs-slider", {
     loop: true,
     slidesPerView: 1,
     spaceBetween: 32,
     navigation: {
       clickable: true,
       nextEl: ".button-tes-next",
       prevEl: ".button-tes-prev",
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     breakpoints: {
       1200: {
         slidesPerView: 1,
       },
     },
   });

 }


var swiper1 = function () {
  if ($("div").hasClass("swiper")) {
    var swiper1 = new Swiper(".slide-type-1", {
      direction: "horizontal",
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
};

var swiper2 = function () {
  if ($("div").hasClass("swiper")) {
    const swiper2 = new Swiper(".slide-type-2", {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        600: {
          slidesPerView: 2,
        },
      },
    });
  }
};

var swiper3 = function () {
  if ($("div").hasClass("swiper")) {
    const swiper3 = new Swiper(".slide-type-3", {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        740: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
};

var swiper4 = function () {
  if ($("div").hasClass("swiper")) {
    const swiper4 = new Swiper(".slide-type-4", {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        780: {
          slidesPerView: 2,
        },
        1220: {
          slidesPerView: 3,
        },
        1650: {
          slidesPerView: 4,
        },
      },
    });
  }
};

var swiper5 = function () {
  if ($("div").hasClass("swiper")) {
    const swiper5 = new Swiper(".slide-type-5", {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      loop: true,
      spaceBetween: 32,
      centeredSlides: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        800: {
          slidesPerView: 3,
        },
        1170: {
          slidesPerView: 5,
        },
      },
    });
  }
};
var partner = function () {
  if ($("div").hasClass("swiper")) {
    const swiper5 = new Swiper(".partner-type-6", {
      direction: "horizontal",
      effect: "slide",
      slidesPerView: 1,
      loop: true,
      spaceBetween: 69,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        800: {
          slidesPerView: 3,
        },
        1170: {
          slidesPerView: 6,
        },
      },
    });
  }
};

var gallery = function () {
  if ($("div").hasClass("widget-dash-video")) {
    var slider = new Swiper(".gallery-slide", {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      loopedSlides: 3,
      navigation: {
        clickable: true,
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
      },
    });

    var thumbs = new Swiper(".gallery-thumb", {
      slidesPerView: "auto",
      spaceBetween: 17,
      loop: true,
      slideToClickedSlide: true,
      slidesPerView: 3,
    });
    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
  }
};
