$('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
});


$('.slider_sp').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
});
$(function(){
    $('.btn-gnavi').on('click',function(){
      var rightVal = 0;
      if($(this).hasClass('hb-open')){
        rightVal = -300;
        $(this).removeClass('hb-open');
      }else{
        $(this).addClass('hb-open');
      }
  
      $('.header-nav').stop().animate({
        right: rightVal
      }, 200);
    });
  });
$(function(){
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });

$(function(){
    $('.mv').delay(1500).queue(function(){
    $(this).addClass('mvactive').dequeue();
});
});

$(function(){
    $('.mv-text-block').delay(100).queue(function(){
    $(this).addClass('mv-text-active').dequeue();
});
});
  
  