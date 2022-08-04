//스크롤 헤더 이벤트

$(function(){

$(window).scroll(function(){
    current = $(this).scrollTop();

    if(current > 50){
        $('.menu-area, .logo').fadeOut(200);
        $('.header').addClass('bg');
    }else{
        $('.menu-area, .logo').fadeIn(200);
        $('.header').removeClass('bg');
    }
})



//메뉴

$('.menu-item').hover(function(e){
    e.preventDefault();

    if($(this).find('.sub-menu').length == 1){
        $('.header').addClass('on');
        $(this).find('.sub-menu').stop().fadeIn(50);
    }    
},function(){
    $('.header').removeClass('on');
   $('.sub-menu').stop().fadeOut(50);

})


//사이드메뉴

$('#menuBtn').click(function(e){
    e.preventDefault();

    $('.side-menu, .side-video').addClass('on');

})

$('.side-top').click(function(e){
    e.preventDefault();

    $('.side-menu, .side-video').removeClass('on');
})


$('.side-item > a').click(function(e){
    e.preventDefault();

    subWrap = $(this).siblings('.side-sub-wrap');
    subList = $(this).siblings('.side-sub-wrap').find('.side-sub-list');
  
    
    if(subWrap.css('display') == 'block'){
      subWrap.stop().fadeOut(500);
      subList.stop().slideUp();
      $(this).stop().removeClass('on');
      
    }else{
        subWrap.stop().fadeIn(500);
        subList.stop().slideDown();
        $(this).stop().addClass('on');      
    }
  
  })

  

  
//지우지말것
})