let fav = [];

// when the user clicks on the heart icon, push the product to the fav array
$(".bi-bookmark").on("click", function () {
  let itemId = $(this).attr("id");
  if (fav.includes(itemId)) {
    fav.splice(fav.indexOf(itemId), 1);
  } else {
    fav.push($(this).attr("id"));
  }
  $(this).toggleClass("bi-bookmark bi-bookmark-fill");
});

$(".bi-suit-heart").on("click", function () {
  let itemId = $(this).attr("id");
  if (fav.includes(itemId)) {
    fav.splice(fav.indexOf(itemId), 1);
  } else {
    fav.push($(this).attr("id"));
  }
  $(this).toggleClass("bi-suit-heart bi-suit-heart-fill");
});

$(".bi-arrow-left-right").on("click", function () {
  console.log(fav.sort());
});

// SPLIDE CAROUSEL PRODUCT PAGE CONFIG
document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 60,
    fixedHeight: 60,
    gap: 6,
    rewind: true,
    pagination: false,
    isNavigation: true,
    arrows: false,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 60,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

  //attach events to custom buttons
  btnNext.addEventListener("click", (e) => {
    thumbnails.go("+1");
  });

  btnPrev.addEventListener("click", (e) => {
    thumbnails.go("-1");
  });
});

// SPLIDE CAROUSEL HIGHLIGHT CONFIG
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#highlight", {
    perPage: 4,
    perMove: 1,
    arrows: false,
    pagination: false,
    gap: 20,
    type: "loop",
    rewind: true,
    breakpoints: {
      800: {
        perPage: 3,
        gap: ".7rem",
        height: "auto",
      },
      640: {
        perPage: 2,
        gap: ".7rem",
        height: "auto",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        height: "auto",
      },
    },
  });

  splide.mount();

  //attach events to custom buttons
  nextHighlights.addEventListener("click", (e) => {
    splide.go("+1");
  });

  prevHighlights.addEventListener("click", (e) => {
    splide.go("-1");
  });
});
