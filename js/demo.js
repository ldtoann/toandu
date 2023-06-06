// chuchayhome
let typed = new Typed(".home", {
  strings: [
    "pop music",
    "&#127908;&#127908;&#127908;",
    "&#127909;&#127909;&#127909;",
    "&#127942;&#127942;&#127942;",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  backDelay: 1000,
  loop: true,
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#backtop").fadeIn();
    } else {
      $("#backtop").fadeOut();
    }
  });
  $("#backtop").click(function () {
    $("html,  body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
});
// animation
AOS.init();
