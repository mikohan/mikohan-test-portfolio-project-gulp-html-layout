var portfolio = $("#portfolio");

portfolio.slick({
  arrows: false,
  dots: true,
  speed: 500,
  slidesToScroll: 2,
  slidesToShow: 2,
});

$("#prev").on("click", function (event) {
  event.preventDefault();
  portfolio.slick("slickNext");
});
$("#portfolioNext").on("click", function (event) {
  event.preventDefault();
  portfolio.slick("slickPrev");
});
