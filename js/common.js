$(function(){
    // #で始まるアンカーをクリックした場合に処理
        $('a[href^="#"]').click(function() {
            // スクロールの速度
            var speed = 500; // ミリ秒
            // 移動先を取得
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            // 移動先を数値で取得
            var position = target.offset().top;
            // スムーススクロール
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });

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
  
	$(window).on('load scroll resize', function() {
		//　「section.test02」が存在したら発火
		if($('.recruit').length){
		    add_class_in_scrolling($('.recruit'));
		}
	});
	// スクロールで要素が表示されている時にclassを付与する
	function add_class_in_scrolling(target) {
	    //　指定した要素の次の要素
	    var nextElement = $('footer');
	    var winScroll = $(window).scrollTop();
	    var winHeight = $(window).height();
	    //　ウィンドウの最下部の位置取得
	    var scrollPos = winScroll + winHeight;
	    //　指定した要素が画面内に入ったらclass付与して出たら削除
	    if(target.offset().top - 100 < scrollPos && nextElement.offset().top + winHeight + 100 > scrollPos) {
	        target.addClass('show');
	    }else{
	        target.removeClass('show');
	    }
  }


  $(window).on('load scroll resize', function() {
		//　「section.test02」が存在したら発火
		if($('.about-fix').length){
		    add_class_in_scrolling($('.about-fix'));
		}
	});
	// スクロールで要素が表示されている時にclassを付与する
	function add_class_in_scrolling(target) {
	    //　指定した要素の次の要素
	    var nextElement = $('.about-text');
	    var winScroll = $(window).scrollTop();
	    var winHeight = $(window).height();
	    //　ウィンドウの最下部の位置取得
	    var scrollPos = winScroll + winHeight;
	    //　指定した要素が画面内に入ったらclass付与して出たら削除
	    if(target.offset().top - 100 < scrollPos && nextElement.offset().top + winHeight + 100 > scrollPos) {
	        target.addClass('show');
	    }else{
	        target.removeClass('show');
	    }
  }
