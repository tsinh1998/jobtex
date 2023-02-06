
/*

  headerFixed
  showsearch
  btnmenu
  dropdown
  swiper1
  swiper2
  swiper3
  swiper4
  swiper5
  gallery
  accordion
  goTop
  counter
  filter
  preload

*/

;(function($) {

  'use strict'

  var headerFixed = function() {        
        $(window).on('load scroll', function(){                
          if ($(window).scrollTop() >= 100) {
            $('.header-above').addClass('hide');
            $('.header-style-03').addClass('background-white');
        }
        else {
            $('.header-above').removeClass('hide');
            $('.header-style-03').removeClass('background-white');
        }
        })            
  }

  var showsearch = function() {
      $(".icon-show-search").click(function(){
        $(".top-search").slideToggle("show");
      });
  }

  var btnmenu = function() {
    $('.btn-menu').on('click', function () {
      $(this).closest('#header-mobile').find('.canvas-nav-wrap').toggleClass('active');
    });
    
    $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function (e) {
      $(this).closest('#header-mobile').find('.canvas-nav-wrap').toggleClass('active');
    });


    $('.canvas').on('click', function () {
      $(this).closest('#header').find('.canvas-nav-wrap').toggleClass('active');
    });
    
    $('.canvas-nav-wrap .overlay-canvas-nav').on('click', function (e) {
      $(this).closest('#header').find('.canvas-nav-wrap').toggleClass('active');
    });

    
    $(document).on('click', '#mainnav_canvas li.menu-item-has-children', function (e) {
      $(this).toggleClass('active').next('ul').slideToggle(1000);
      e.stopImmediatePropagation();
    });
  }

  var swiper1 = function(){
  if ( $('div').hasClass('swiper') ){
  var swiper1 = new Swiper('.slide-type-1', {
    
    direction: 'horizontal',
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });}}

var swiper2 = function(){
  if ( $('div').hasClass('swiper') ){
  const swiper2 = new Swiper('.slide-type-2', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints: {
      600: {
        slidesPerView: 2,
      }
    }
  
  });}}
  
  var swiper3 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper3 = new Swiper('.slide-type-3', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints: {
      740:{
        slidesPerView:2
      },
      1200: {
        slidesPerView: 3,
      }
    }
  
  });}}
  
  var swiper4 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper4 = new Swiper('.slide-type-4', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween:30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints: {
      780:{
        slidesPerView:2
      },
      1220: {
        slidesPerView:3
      },
      1650:{
        slidesPerView: 4,
      }
    }
  
  });}}
  
  var swiper5 = function(){
    if ( $('div').hasClass('swiper') ){
  const swiper5 = new Swiper('.slide-type-5', {
    direction: 'horizontal',
    effect: 'slide',
    slidesPerView: 1,
    loop:true,
  
    breakpoints: {
      800: {
        slidesPerView:3
      },
      1170:{
        slidesPerView: 5,
      }
    }
  
  });}}

  var gallery = function(){
    if ( $('div').hasClass('widget-adv-video') ){
  var slider = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
  
  var thumbs = new Swiper ('.gallery-thumbs', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    slideToClickedSlide: true,
    
    
  });
    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
  }
  }

  var accordion = function() {
    if ( $('div').hasClass('widget-accordion') ) {
      $(".accordion-items").on("click", ".accordion-heading", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
      $(".accordion-items-1").on("click", ".accordion-heading-1", function () {
        $(this).toggleClass("active").next().slideToggle();
    
        $(".accordion-content-1").not($(this).next()).slideUp(300);
    
        $(this).siblings().removeClass("active");
      });
    }
  }

  var goTop = function() {
    $(window).scroll(function() {
      if ( $(window).scrollTop() > 500 ) {
          $('.go-top').addClass('show');
      } else {
          $('.go-top').removeClass('show');
      }
    }); 

    $('.go-top').on('click', function(e) {            
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 1000);
    });
  }

  var counter = function () {
    if ($('div').hasClass("widget-counter")) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".wrap-counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".wrap-counter")
              .find(".counter-number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data('formatter');
                $(this).countTo({
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  var filter = function() {
    if ($('div').hasClass("widget-filter-isotope")) {
      var $grid = $(".grid").isotope(
        {
        itemSelector: ".element-item",
        layoutMode: "fitRows"
      }
      );
     
      $(".filters-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });
      
      $(".button-group").each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    }
  }

  var preload = function() {
    $(window).on('load', function() {
      $('#preload').delay(1500).fadeOut('fast', function() {
              $('#preload').remove();
          })
      })
  }

  // Dom Ready
    $(function() { 
    headerFixed();
    showsearch();
    btnmenu();
    swiper1();
    swiper2();
    swiper3();
    swiper4();
    swiper5();
    gallery();
    accordion();
    goTop();
    counter();
    filter();
    preload();

  });

})(jQuery);

