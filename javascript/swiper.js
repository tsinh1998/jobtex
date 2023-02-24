var swiper =  new Swiper(".tes-slider", {
    loop:true,
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

var swiper =  new Swiper(".location-slider", {
    loop:true,
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