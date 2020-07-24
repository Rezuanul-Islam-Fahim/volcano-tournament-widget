/* ========================================================================

VOLCANO: functions.js
Main Theme JS file

@Author: Themolution01
@URL: https://themeforest.net/user/themolution01

=========================================================================
 */

"use strict";

$(document).ready(function() {


  // Initialize tooltip
  // ============================
  $('[data-toggle="tooltip"]').tooltip();


  // Carousel animation
  // =============================
  function e(e) {
    var t = "webkitAnimationEnd animationend";
    e.each(function() {
      var e = $(this),
        n = e.data("animation");
      e.addClass(n).one(t, function() {
        e.removeClass(n);
      });
    });
  }
  var t = $("#myCarousel"),
    n = t.find(".item:first").find("[data-animation ^= 'animated']");
  e(n), t.carousel("pause"), t.on("slide.bs.carousel", function(t) {
    var n = $(t.relatedTarget).find("[data-animation ^= 'animated']");
    e(n);
  });


  // Show dropdown menu on hover
  // =================================
  $("nav ul li.dropdown").hover(function() {

      $(this).find(".dropdown-menu").addClass("show");

      var animation = $(this).data("effect");
      animation ? $(this).find(".dropdown-menu").addClass("animated" + animation) : $(this).find(".dropdown-menu").addClass("animated fast fadeIn");

    },
    function() {
      $(this).find(".dropdown-menu").removeClass("show");

      var animation = $(this).data("effect");
      animation ? $(this).find(".dropdown-menu").removeClass("animated" + animation) : $(this).find(".dropdown-menu").removeClass("animated fast fadeIn");

    });


  // Full height carousel
  // ===================================
  $(".full-carousel .item").each(function() {
    $(this).css("height", $(window).height() - ($("header").outerHeight() + $(".main-nav").outerHeight()));
  });

  $(window).resize(function() {
    $(".full-carousel .item").each(function() {
      $(this).css("height", $(window).height() - ($("header").outerHeight() + $(".main-nav").outerHeight()));
    });
  });

  $(".carousel-auto .item").each(function() {
    $(this).css("height", $(".membership").outerHeight() + $(".membership").outerHeight() / 4);
  });

  $(".register .item img").each(function() {
    $(this).css("height", $(this).parent().height());
  });

  $(".inactiveUntilOnLoad").removeClass("inactiveUntilOnLoad");


  // Games rating owl carousel
  // =====================
  $('.games-rating .owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    center: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  // Games magazine owl carousel
  // =====================
  $('.games-maga .owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    center: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  // Recommended post owl carousel
  // =====================
  $('.recommended-post .owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    center: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });


  // Post details owl carousel
  // =====================
  $('.post-details .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    center: true,
    smartSpeed: 600,
    autoplay: true,
    items: 1,
    autoplayTimeout: 4000
  });


  // Progress Bar
  // ==============================
  setTimeout(function() {
    $('.progress-animation .progress-bar').each(function() {
      var me = $(this);
      var perc = me.attr("aria-valuenow");
      var current_perc = 0;
      var progress = setInterval(function() {
        if (current_perc >= perc) {
          clearInterval(progress);
        } else {
          current_perc += 1;
          me.css('width', (current_perc) + '%');
        }
      }, 0);
    });
  }, 0);


  // Coming soon
  // =========================
  var now = new Date();
  var countTo = 150 * 24 * 60 * 60 * 1000 + now.valueOf();
  $('.timer').countdown(countTo, function(event) {
    $(this).find('.days').text(event.offset.totalDays);
    $(this).find('.hours').text(event.offset.hours);
    $(this).find('.minutes').text(event.offset.minutes);
    $(this).find('.seconds').text(event.offset.seconds);
  });


  // button Scrolling
  // =========================
  $(".carousel .scroll-btn, .scrollToTop").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function() {
      window.location.hash = hash;
    });
  });


  // ScrollToTop button
  //=======================
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".scrollToTop").fadeIn(1200);
    } else {
      $(".scrollToTop").fadeOut(600);
    }
  });


  // Preloader
  // =======================
  $('.js-preloader').preloadinator({
    minTime: 2000
  });

});

// JavaScript Document