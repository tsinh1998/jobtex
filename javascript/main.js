/*

  headerFixed
  showsearch
  btn
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

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  // Header Fixed
  var headerFixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 400) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });

      }
    }
  };

  var showsearch = function () {
    $(".icon-show-search").click(function () {
      $(".top-search").slideToggle("show");
    });
  };

  /*---categories slideToggle---*/
  $(".categories_title").on("click", function () {
    $(this).toggleClass("active");
    $(".categories_menu_toggle").slideToggle("medium");
  });
  $(".categories_title2").on("click", function () {
    $(this).toggleClass("active");
    $(".categories_menu_toggle22").slideToggle("medium");
  });

  var accordion = function () {
    var args = { duration: 600 };
    $(".flat-toggle .toggle-title.active").siblings(".toggle-content").show();
    $(".flat-toggle.enable .toggle-title").on("click", function () {
      $(this).closest(".flat-toggle").find(".toggle-content").slideToggle(args);
      $(this).toggleClass("active");
    });

    $(".flat-accordion .toggle-title").on("click", function () {
      if (!$(this).is(".active")) {
        $(this)
          .closest(".flat-accordion")
          .find(".toggle-title.active")
          .toggleClass("active")
          .next()
          .slideToggle(args);
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      } else {
        $(this).toggleClass("active");
        $(this).next().slideToggle(args);
      }
    });

    $(".flat-accordion .flat-toggle").on("click", function () {
      if (!$(this).is(".active")) {
        $(this).find(".flat-toggle.activ").toggleClass("active").next();
        $(this).toggleClass("active");
      } else {
        $(this).toggleClass("active");
      }
    });
  };

  var parallax = function () {
    if ($(".parallax").length > 0) {
      if ($().parallax && isMobile.any() == null) {
        $(".parallax").parallax("50%", -0.5);
      }
    }
  };

  var goTop = function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 500) {
        $("#scroll-top").addClass("show");
      } else {
        $("#scroll-top").removeClass("show");
      }
    });

    $("#scroll-top").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 1000);
    });
  };

  var counter = function () {
    if ($(".wrap-counter").length > 0) {
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
                  formatter = $(this).data("formatter");
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

  var filter = function () {
    if ($("div").hasClass("widget-filter-isotope")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".element-item",
        layoutMode: "fitRows",
      });

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
  };

  var popUpLightBox = function () {
    if ($(".lightbox-image").length) {
      $(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {
          media: {},
        },
      });
    }
  };

  var flatSpacer = function () {
    $(window).on("load resize", function () {
      var mode = "desktop";
      if (matchMedia("only screen and (max-width: 991px)").matches)
        mode = "mobile";
      if (matchMedia("only screen and (max-width: 767px)").matches)
        mode = "smobile";
      $(".wprt-spacer").each(function () {
        if (mode === "desktop") {
          $(this).attr("style", "height:" + $(this).data("desktop") + "px");
        } else if (mode == "mobile") {
          $(this).attr("style", "height:" + $(this).data("mobi") + "px");
        } else {
          $(this).attr("style", "height:" + $(this).data("smobi") + "px");
        }
      });
    });
  };

  var dropdown = function (id) {
    var obj = $(id + ".dropdown");
    var btn = obj.find(".btn-selector");
    var dd = obj.find("ul");
    var opt = dd.find("li");
    dd.hide();
    obj
      .on("mouseenter", function () {
        dd.show();
        dd.addClass("show");
        $(this).css("z-index", 1000);
      })
      .on("mouseleave", function () {
        dd.hide();
        $(this).css("z-index", "auto");
        dd.removeClass("show");
      });

    opt.on("click", function () {
      dd.hide();
      var txt = $(this).html();
      opt.removeClass("active");
      $(this).addClass("active");
      btn.html(txt);
    });
  };

  var dropdown2 = function (id) {
    var obj = $(id + ".dropdown");
    var btn = obj.find(".btn-selector");
    var dd = obj.find("ul");
    var opt = dd.find("li");
    dd.hide();
    obj
      .on("mouseenter", function () {
        dd.show();
        dd.addClass("show");
        $(this).css("z-index", 1000);
      })
      .on("mouseleave", function () {
        dd.hide();
        $(this).css("z-index", "auto");
        dd.removeClass("show");
      });

    opt.on("click", function () {
      dd.hide();
      // var txt = $(this).html();
      // btn.html(txt);
    });
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
        breakpoints: {
          200: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 17,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 17,
          },
        },
      });
      slider.controller.control = thumbs;
      thumbs.controller.control = slider;
    }
  };

  var flatProgressBar = function () {
    if ($(".chart-box").length > 0) {
      $(".chart-box").appear(
        function () {
          var bar = $(this).find(".chart").data("barcolor"),
            track = $(this).find(".chart").data("trackcolor"),
            size = $(this).find(".chart").data("size"),
            withh = $(this).find(".chart").data("withh"),
            text = $(this).find(".chart").data("text");
          $(this).find(".chart .text").append(text);
          $(".chart").easyPieChart({
            easing: "easeOut",
            lineWidth: withh,
            size: size,
            scaleColor: false,
            barColor: bar,
            trackColor: track,
            animate: 5000,
            onStep: function (from, to, percent) {
              $(this.el).find(".percent").text(Math.round(percent));
            },
          });
        },
        {
          offset: 400,
        }
      );
    }
  };

  //
  var loadmore = function () {
    $(".client-review .client-item").slice(0, 4).show();
    $(".client-review2 .client-item2").slice(0, 4).show();
    $(".load-btn").on("click", function (e) {
      e.preventDefault();
      $(".client-review .client-item:hidden").slice(0, 4).slideDown();
      $(".client-review2 .client-item2:hidden").slice(0, 4).slideDown();
      var action1 = $(".client-review .client-item:hidden");
      var action2 = $(".client-review2 .client-item2:hidden");
      if (action1.length == 0 || action2.length == 0) {
        $(this).fadeOut("slow");
      }
    });
  };

  var loadmore2 = function () {
    $(".fl-item").slice(0, 0).show();
    $(".fl-item2").slice(0, 0).show();

    $(".loadmore2").on("click", function (e) {
      e.preventDefault();

      $(".fl-item:hidden").slice(0, 1).slideDown();
      $(".fl-item2:hidden").slice(0, 1).slideDown();
      if ($(".fl-item:hidden").length == 0) {
        $(".loadmore2").hide();
      }
      if ($(".fl-item2:hidden").length == 0) {
        $("#loadmore2").hide();
      }
    });
  };

  // up img 1
  $("#profileimg").click(function (e) {
    $("#tf-upload-img").click();
  });

  function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]) {
      $("#profileimg").attr(
        "src",
        window.URL.createObjectURL(uploader.files[0])
      );
    }
  }
  $("#tf-upload-img").change(function () {
    fasterPreview(this);
  });

  // up img 2
  var UpImg = function () {
    $("#profileimg2").click(function (e) {
      $("#tf-upload-img2").click();
    });

    function fasterPreview(uploader) {
      if (uploader.files && uploader.files[0]) {
        $("#profileimg2").attr(
          "src",
          window.URL.createObjectURL(uploader.files[0])
        );
      }
    }

    $("#tf-upload-img2").change(function () {
      fasterPreview(this);
    });
  };

  // delete
  var delete_img = function (e) {
    $(".remove-file").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".file-delete").remove();
    });
  };

  var tfTabs = function () {
    $(".tf-tab").each(function () {
      $(this).find(".content-tab").children().hide();
      $(this).find(".content-tab").children().first().show();
      $(this)
        .find(".menu-tab")
        .children("div.user-tag, .btn-display, .ct-tab")
        .on("click", function (e) {
          e.preventDefault();
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".tf-tab")
            .find(".content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".tf-tab")
            .find(".content-tab")
            .children()
            .eq(liActive)
            .siblings()
            .hide();
        });
    });
  };

  // Mobile Navigation
  var mobileNav = function () {
    var mobile = window.matchMedia("(max-width: 1024px)");
    var wrapMenu = $(".header-ct-center");
    var navExtw = $(".nav-extend.active");
    var navExt = $(".nav-extend.active").children();

    responsivemenu(mobile);

    mobile.addListener(responsivemenu);

    function responsivemenu(mobile) {
      if (mobile.matches) {
        $("#main-nav")
          .attr("id", "main-nav-mobi")
          .appendTo(".nav-wrap")
          .hide()
          .children(".menu")
          .append(navExt)
          .find("li:has(ul)")
          .children("ul")
          .removeAttr("style")
          .hide()
          .before('<span class="arrow"></span>');
      } else {
        $("#main-nav-mobi")
          .attr("id", "main-nav")
          .removeAttr("style")
          .prependTo(wrapMenu)
          .find(".ext")
          .appendTo(navExtw)
          .parent()
          .siblings("#main-nav")
          .find(".sub-menu")
          .removeAttr("style")
          .prev()
          .remove();

        $(".mobile-button").removeClass("active");
        $(".mobile-button-style2").removeClass("active");
        $(".sub-menu").css({ display: "block" });
      }
    }
    $(document).on("click", ".mobile-button", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", ".mobile-button-style2", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", "#main-nav-mobi .arrow", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  };

  var dropOptionForm = function () {
    if ($("select").length > 0) {
      $(
        "select:not(#billing_country):not(.country_select):not(#billing_state)"
      ).niceSelect();
    }
  };

  new WOW().init();

  var progressProduct = function () {
    if ($(".progress-item").length > 0) {
      $(".progress-item").appear(function () {
        $(this)
          .find("div.donat-bg")
          .each(function () {
            $(this)
              .find(".custom-donat")
              .delay(600)
              .animate(
                {
                  width: $(this).attr("data-percent"),
                },
                1000,
                "easeInCirc"
              );
            var txt = $(this).attr("data-percent");
            $(this).closest(".rating-details").find(".percent").text(txt);
          });
      });
    }
  };

  var Modal_Right = function () {
    const body = $("body");
    const modalMenu = $(".sidebar-popup");
    const modalMenu2 = $(".wd-popup-form");
    const modalMenu3 = $(".wd-popup-job-apply");
    const modalMenu4 = $(".wd-filter-radio");

    if (modalMenu.length) {
      const open = function () {
        modalMenu.addClass("modal-menu--open");
      };
      const close = function () {
        modalMenu.removeClass("modal-menu--open");
      };

      $(".button-filter").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop, .title-button-group").on("click", function () {
        close();
      });
    }
    if (modalMenu2.length) {
      const close = function () {
        modalMenu2.addClass("modal-menu--close");
      };
      $(".modal-menu__backdrop, .title-button-group").on("click", function () {
        close();
      });
    }
    if (modalMenu3.length) {
      const open = function () {
        modalMenu3.addClass("modal-menu--open");
      };
      const close = function () {
        modalMenu3.removeClass("modal-menu--open");
      };
      $(".btn-popup").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop").on("click", function () {
        close();
      });
    }
    if (modalMenu4.length) {
      $(".filter-radio").on("click", function () {
        modalMenu4.toggleClass("modal-menu--open");
      });
    }
  };

  var setTimeIn = function () {
    if ($(".wd-popup-form").length > 0) {
      $(".wd-popup-form").delay(2000).show(0);
    }
  };

  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }

      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 0) {
        value = value + 1;
      }

      $input.val(value);
    });
  };

  var preload = function () {
    $(window).on("load", function () {
      $(".preload")
        .delay(1500)
        .fadeOut("fast", function () {
          $(".preload").remove();
        });
    });
  };

  // Dom Ready
  $(function () {
    headerFixed();
    showsearch();
    dropOptionForm();
    flatProgressBar();
    accordion();
    goTop();
    mobileNav();
    counter();
    setTimeIn();
    tfTabs();
    filter();
    parallax();
    gallery();
    flatSpacer();
    btnQuantity();
    dropdown("#item_date");
    dropdown("#item_size");
    dropdown("#language");
    dropdown("#item_category");
    dropdown("#item_category2");
    dropdown("#item_apply");
    dropdown("#item_qualification");
    dropdown("#item_1");
    dropdown("#item_2");
    dropdown("#item_3");
    dropdown("#item_4");
    dropdown("#item_5");
    dropdown("#item_6");
    dropdown("#item_7");
    dropdown2("#items_1");
    dropdown2("#items_2");
    dropdown2("#items_3");
    dropdown2("#items_4");
    dropdown2("#items_5");
    loadmore();
    loadmore2();
    UpImg();
    delete_img();
    Modal_Right();
    popUpLightBox();
    progressProduct();
    preload();
  });
})(jQuery);