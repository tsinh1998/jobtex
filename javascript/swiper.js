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

//jobs-slider
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

//Tabs Box
if ($(".tabs-box").length) {
  $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("data-tab"));

    if ($(target).is(":visible")) {
      return false;
    } else {
      target
        .parents(".tabs-box")
        .find(".tab-buttons")
        .find(".tab-btn")
        .removeClass("active-btn");
      $(this).addClass("active-btn");
      target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
      target
        .parents(".tabs-box")
        .find(".tabs-content")
        .find(".tab")
        .removeClass("active-tab animated fadeIn");
      $(target).fadeIn(300);
      $(target).addClass("active-tab animated fadeIn");
    }
  });
}
