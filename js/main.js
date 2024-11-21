$(document).ready(function () {
  $("#baby").on("click", function () {
    M2swiper.slideTo(1);
  });

  $("#student").on("click", function () {
    M2swiper.slideTo(0);
  });

  $("#parent").on("click", function () {
    M2swiper.slideTo(3);
  });
});
