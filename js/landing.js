window.onload = function () {
    let images = [
      "../img/main-shaped-1.png",
      "../img/main-shaped-2.png",
      "../img/main-shaped-3.png",
      "../img/main-shaped-bg.png",
    ];

    images.forEach((src) => {
      preload(src);
    });
  };
$(document).ready(function () {

  

  let preload = (src) => {
    let img = new Image();
    img.src = src;
  };
  // 子選單

  $('li.nav-item').hover(function(){
                $(this).children('div.subMenu').stop().slideToggle(600);
            })
  //scroll按鈕
  var main = $("main").position();
  var navHeight = $("#nav").height() + 70;

  $(".cd-scroll").on("click", function (e) {
    $("html").animate({ scrollTop: main.top - navHeight }, 1000);
  });

  // 漢堡選單＆旁邊小預約按鈕
  $(".menu").click(function () {
          
          $(".menu").toggleClass("almond");

         if($(".menu").hasClass("almond")){
            $("#mobileNav").removeClass("d-none");
            $('#small-booking').hide();
          } else {
            $("#mobileNav").addClass("d-none");
            $('#small-booking').show();
          }
       

   });
            
  
// 輪播圖下滑效果
  $(window).on("scroll", function (event) {
    var scrollTop = $(this).scrollTop();

    var yOffset = window.pageYOffset;
    var width = $(window).width();
    var breakpoint = 110;

    var halfWindow = $(window).height() / 2 + 70;

    if (yOffset > halfWindow) {
      $(".crossfade").css("opacity", "0").animate(3000);
      $("#nav").addClass("active").animate(3000);
      $("#nav-gradient").addClass("show").animate(3000);
      $(".navbar-toggler").removeClass("d-none").animate(3000);
      $(".navbar-nav").removeClass("d-lg-none").animate(3000);
      $("#logo").addClass("shrink").animate(3000);
    } else {
      $(".crossfade").css("opacity", "1").animate(3000);
      $("#nav").removeClass("active").animate(3000);
      $("#nav-gradient").removeClass("show").animate(3000);
      $(".navbar-toggler").addClass("d-none").animate(3000);
      $(".navbar-nav").addClass("d-lg-none").animate(3000);

      $("#logo").removeClass("shrink").animate(3000);
    }


  });
});
