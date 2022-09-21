$(document).ready(function () {
  $("#service_desktop_banner").load(
    "Assets/Banner/Service-Desktop-Banner.html"
  );
});


$(document).ready(function () {
  $("#header").load(
    "Assets/Banner/Header.html"
  );
});


$(function () {
  $('.scroll2').infiniteslide({
    speed: 100,
    direction: 'right'
  });
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  autoplay: true,
  slideTransition: 'linear',
  autoplaySpeed: 6000,
  smartSpeed: 6000,
  center: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})


$(document).ready(function () {
  $(".set > a").on("click", function () {
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
              .siblings(".content")
              .slideUp(200);
          $(".set > a i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
      } else {
          $(".set > a i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
          $(this)
              .find("i")
              .removeClass("fa-plus")
              .addClass("fa-minus");
          $(".set > a").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
              .siblings(".content")
              .slideDown(200);
      }
  });
});