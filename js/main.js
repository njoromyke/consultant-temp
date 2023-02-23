$(document).ready(function () {
  $(".burger").click(function () {
    $(".nav-links").toggleClass("active");
    $(".burger").toggleClass("toggle");
  });
});

$(document).ready(function () {
  $(".nav-links a").click(function () {
    $(".nav-links").removeClass("active");
    $(".burger").removeClass("toggle");
  });

  //   owl carousel script
  $(".owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
      },
      600: {
        items: 2,
      },

      992: {
        items: 2,
        loop: true,
      },

      1000: {
        items: 3,
        loop: true,
      },
    },

    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoHeight: true,

    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],

    responsiveClass: true,
  });

  $("#date").text(new Date().getFullYear());
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: -1.2921,
    lng: 36.8219,
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 16,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
