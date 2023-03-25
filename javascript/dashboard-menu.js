!function(t) {
    "use strict";

    t("#side-menu").downMenu(),
    t("#left-menu-btn").on("click", function(e) {
        e.preventDefault(),
        t("body").toggleClass("sidebar-enable"),
        992 <= t(window).width() ? t("body").toggleClass("show-job") : t("body").removeClass("show-job")
    }),
   
    t("#sidebar-menu a").each(function() {
        var e = window.location.href.split(/[?#]/)[0];
        this.href == e && (t(this).addClass("active"),
        t(this).parent().addClass("ff-active"),
        t(this).parent().parent().addClass("ff-show"),
        t(this).parent().parent().prev().addClass("ff-active"),
        t(this).parent().parent().parent().addClass("ff-active"),
        t(this).parent().parent().parent().parent().addClass("ff-show"),
        t(this).parent().parent().parent().parent().parent().addClass("ff-active"))
    }),
    t(".navbar-nav a").each(function() {
        var e = window.location.href.split(/[?#]/)[0];
        this.href == e && (t(this).addClass("active"),
        t(this).parent().addClass("active"),
        t(this).parent().parent().addClass("active"),
        t(this).parent().parent().parent().addClass("active"),
        t(this).parent().parent().parent().parent().addClass("active"),
        t(this).parent().parent().parent().parent().parent().addClass("active"))
    }),
    t(document).ready(function() {
        var e;
        0 < t("#sidebar-menu").length && 0 < t("#sidebar-menu .ff-active .active").length && (300 < (e = t("#sidebar-menu .ff-active .active").offset().top) && (e -= 300,
        t(".left-menu .simplebar-content-wrapper").animate({
            scrollTop: e
        }, "slow")))
    }),


    t(".right-bar-toggle").on("click", function(e) {
        t("body").toggleClass("right-bar-enabled")
    }),
    t(document).on("click", "body", function(e) {
        0 < t(e.target).closest(".right-bar-toggle, .right-bar").length || t("body").removeClass("right-bar-enabled")
    }),
    function() {
        if (document.getElementById("topnav-menu-content")) {
            for (var e = document.getElementById("topnav-menu-content").getElementsByTagName("a"), t = 0, n = e.length; t < n; t++)
                e[t].onclick = function(e) {
                    "#" === e.target.getAttribute("href") && (e.target.parentElement.classList.toggle("active"),
                    e.target.nextElementSibling.classList.toggle("show"))
                }
                ;
            window.addEventListener("resize", s)
        }
    }(),
    t(function() {
        t('[data-bs-toggle="tooltip"]').tooltip()
    }),
    t(function() {
        t('[data-bs-toggle="popover"]').popover()
    }),
    
    $(function () {

    });
    // t.init();
}(jQuery);