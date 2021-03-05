$(document).ready(function () {

    // 子選單

  $('li.nav-item').hover(function(){
                $(this).children('div.subMenu').stop().slideToggle(600);
            })
            
   // 選單下滑變換效果         
  $(window).on("scroll", function (event) {
    var yOffset = window.pageYOffset;
    var breakpoint = 50;
    var halfWindow = $(window).height() / 2 + 70;

    if (yOffset > breakpoint) {
      $("#nav").addClass("active");
      $("#nav-gradient").addClass("show");
    } else {
      $("#nav").removeClass("active");
      $("#nav-gradient").removeClass("show");
    }

    if (yOffset > halfWindow) {
      $("#logo").addClass("shrink").animate(3000);
    }
  });

  $("li.nav-item").hover(function () {
    $(this).children("div.subMenu").stop().slideToggle(600);
  });
  $(".menu").click(function () {
    $(".menu").toggleClass("almond");
    $("#small-booking").fadeToggle(250);
    if ($(".menu").hasClass("almond")) {
      $("#mobileNav").removeClass("d-none");
    } else {
      $("#mobileNav").addClass("d-none");
    }
  });
});
