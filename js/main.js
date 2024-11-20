$(document).ready(function () {
  $(".header__burger").click(function () {
    $(this).children().toggleClass("active");
    $("body").toggleClass("fixed");
    $(".header__drop").toggleClass("active");
    return false;
  });

  $(".header__language li a").click(function () {
    $(".header__language li a").removeClass("active");
    $(this).addClass("active");
    /* return false; */
  });

  /*   $(".footer__head").click(function () {
    if ($(window).width() < 768) {
      $(this).toggleClass("active");
      $(this).next().slideToggle(200);
    }
  }); */

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        if (change.target.classList.contains("element-animation")) {
          change.target.classList.add("element-show");
        }
        if (change.target.classList.contains("element-animation-2")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 500);
        }
        if (change.target.classList.contains("element-animation-3")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 1000);
        }
        if (change.target.classList.contains("element-animation-4")) {
          setTimeout(() => {
            change.target.classList.add("element-show");
          }, 1500);
        }
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(
    ".element-animation, .element-animation-2, .element-animation-3, .element-animation-4"
  );
  for (let elm of elements) {
    observer.observe(elm);
  }

  $('[type="tel"]').mask("+7 (999) 999-99-99");

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  var swiper = new Swiper(".doctor__slider", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: false,
    navigation: {
      nextEl: ".doctor__arrows-next",
      prevEl: ".doctor__arrows-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });

  ymaps.ready(initDavinci);
  function initDavinci() {
    var myMapDavinci = new ymaps.Map("mymap", {
      center: [51.128201, 71.430429],
      zoom: 12,
      controls: [],
    });
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        position: {
          right: "14px",
          top: "75px",
        },
      },
    });
    myMapDavinci.controls.add(zoomControl);
    if ($(window).width() >= 991) {
      myMapDavinci.behaviors.disable("scrollZoom");
    } else {
      myMapDavinci.behaviors.disable("drag");
    }

    city1 = new ymaps.GeoObjectCollection(null, {
      preset: "islands#yellowIcon",
      iconLayout: "default#image",
    });
    city1.add(
      new ymaps.Placemark([51.115232, 71.420943], {
        hintContent: "ул. Ханов Керея и Жанибека, 11",
      })
    );

    city2 = new ymaps.GeoObjectCollection(null, {
      preset: "islands#yellowIcon",
      iconLayout: "default#image",
    });
    city2.add(
      new ymaps.Placemark([51.132474, 71.37591], {
        hintContent: "ул. Асфендиярова, 3",
      })
    );

    city3 = new ymaps.GeoObjectCollection(null, {
      preset: "islands#yellowIcon",
      iconLayout: "default#image",
    });
    city3.add(
      new ymaps.Placemark([51.156405, 71.429315], {
        hintContent: "ул. Самал, 7",
      })
    );

    city4 = new ymaps.GeoObjectCollection(null, {
      preset: "islands#yellowIcon",
      iconLayout: "default#image",
    });
    city4.add(
      new ymaps.Placemark([51.154738, 71.487436], {
        hintContent: "Проспект Абылай хана, 33",
      })
    );

    city5 = new ymaps.GeoObjectCollection(null, {
      preset: "islands#yellowIcon",
      iconLayout: "default#image",
    });
    city5.add(
      new ymaps.Placemark([51.145591, 71.404818], {
        hintContent: "Шоссе Коргалжын, 5",
      })
    );

    myMapDavinci.geoObjects.add(city1);
    myMapDavinci.geoObjects.add(city2);
    myMapDavinci.geoObjects.add(city3);
    myMapDavinci.geoObjects.add(city4);
    myMapDavinci.geoObjects.add(city5);

    $(".city__items ul li a").click(function (e) {
      e.preventDefault();
      let y = $(this).attr("data-y");
      let x = $(this).attr("data-x");
      myMapDavinci.setCenter([y, x]);
      myMapDavinci.setZoom(12);
    });
  }
});
