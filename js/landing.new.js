$(document).ready(function () {
    // 回到最上方的按鈕
      $('.toTop').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
              scrollTop: 0,
          }, 700)
      });
      //$('.cd-scroll').on('click', function (e) {// 監聽 nav 下的每個 a
        //  e.preventDefault();
          //const anchor = $(this).attr('href');//取得個別點擊時的href，就是個別id的區塊 e.g #zone1
          //const linkScroll = $(anchor).offset().top;// 每個區塊的最上方距離 document 最上方有多遠
          //$('html,body').stop().animate({ // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
            //  scrollTop: linkScroll -43 // 43 是此範例 header 的高度，因為 header 設定 fixed 所以扣掉，
                                        // 但 zone1 要設定 padding-top 空間才不會被蓋掉
        //  },700)
      //});





      $('.cd-scroll').on('scroll', function (e) {// 監聽 nav 下的每個 a
        e.preventDefault();
        //const main = $('main').position();//取得main的位置
        const topMain = $('main').offset().top;// 每個區塊的最上方距離 document 最上方有多遠
        $('html,body').stop().animate({ // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
            scrollTop: topMain - 100 // 43 是此範例 header 的高度，因為 header 設定 fixed 所以扣掉，
                                      // 但 zone1 要設定 padding-top 空間才不會被蓋掉
        },1000)
    });
  });