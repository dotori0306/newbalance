$(function(){

  // gsap.set('.sc-visual .sub-title',{opacity:0})
  // gsap.set('.sc-visual .title span',{opacity:0})
  // gsap.set('.sc-visual .img-slide',{yPercent:-150})
  gsap.set('.sc-visual .img-slide img',{x:-100,yPercent:-150})

  tl = gsap.timeline({
    defaults:{
      duration:1,
    }
  })

  tl.addLabel('label1')
  tl.to('.sc-visual .img-slide img',{x:0,opacity:1,stagger:0.1},"label1")
  tl.to('.sc-visual .img-slide img',{yPercent:0,stagger:0.1},"label1+=1")

  tl.to('.sc-visual .sub-title',{opacity:1},"label1+=1.3")
  tl.to('.sc-visual .title span',{opacity:1,stagger:0.1},"label1+=1.3")
  tl.to('.header',{opacity:1},"label1+=1.3")


  gsap.to('.sc-visual .img-item',{

    scrollTrigger:{
      trigger:".img-slide",
      start:"top bottom",
      end:"bottom top",
      // markers:true,
      scrub:1,
    },
    scale:0.8
  })


  
  $('.img-rolling').each(function(){

    child =$(this).find('img');

    gsap.to(child,{

      scrollTrigger:{
        trigger:$(this),
        start:"top bottom",
        end:"bottom top",
        // markers:true,
        scrub:1,
      },
      yPercent:-15
    })
  
  })




  $('[data-fade]').each(function(){


    gsap.fromTo($(this),{
      opacity:0
    },{

      scrollTrigger:{
        trigger:$(this),
        start:"top 80%",
        end:"bottom top",
        // markers:true,
      },
      duration:1,
      opacity:1
    })
  
  })






  // $('.sc-b-collection .img-wrap').


  // gsap.set('.sc-b-collection .img-wrap',{
  //   left:"random(0,"+window.innerWidth+")",
  //   top:"random(0,"+window.innerHeight+")",
  //   opacity:0,
  // })


  // collection = gsap.to('.sc-b-collection .img-wrap',{
  //   left:"random(0,"+window.innerWidth+")",
  //   top:"random(0,"+window.innerHeight+")",
  //   opacity:1,
  //   paused:true,
  // })

  // $('.category-area li').hover(function(){

  //   gsap.to('.sc-b-collection .img-wrap',{
  //     dalay:0.2,
  //     left:"random(100,"+window.innerWidth+")",
  //     top:"random(100,"+window.innerHeight+")",
  //   })
  // })



  //비디오 배너

  $('.sc-video-banner').mousemove(function(e){
    gsap.to('.cursor',{
      x:e.clientX-50,
      y:e.clientY-50,
      opacity:1,
    })
  })

  $('.sc-video-banner').mouseleave(function(e){
    gsap.to('.cursor',{
      opacity:0,
    })
  })

  $('.sc-video-banner').click(function(){
    $('.video')[0].pause()
  })





// slideLoop = gsap.to('.sc-visual .img-wrap',10,{
//     xPercent:-50,
//     repeat:-1, //무한반복
//     ease:'none',
//     paused:true,
  
//   })
  
//   slideLoop.play()




////// spotlight

var swiper = new Swiper(".spotlight-slide", {
    slidesPerView: 'auto',
    // spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    speed:1000,
 
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev",
    },
  });



  //instagram

  tl2 = gsap.timeline({

    scrollTrigger:{
      trigger:".sc-instagram",
      start:"top top",
      end:"bottom top",
      // markers:true,
      scrub:1,
      pin:true,
    }
  })


  tl2.addLabel('m1')
  tl2.from('.sc-instagram .img-area',{scale:4,},"m1")
  tl2.from('.sc-instagram img:nth-child(1)',{xPercent:-20,yPercent:-70},'m1')
  tl2.from('.sc-instagram img:nth-child(2)',{xPercent:50,yPercent:-50},'m1')
  tl2.from('.sc-instagram img:nth-child(4)',{xPercent:12,yPercent:0},'m1')
  tl2.from('.sc-instagram img:nth-child(5)',{xPercent:40,yPercent:-40},'m1')


  // tl2.addLabel('m1')
  
  // tl2.from('.sc-instagram .img-area',{scale:4,})
  // tl2.from('.sc-instagram img:nth-child(1)',{opacity:0,},'m1')
  // tl2.from('.sc-instagram img:nth-child(2)',{opacity:0,},'m1')
  // tl2.from('.sc-instagram img:nth-child(3)',{opacity:0,},'m1')
  // // // tl2.from('.sc-instagram img:nth-child(4)',{scale:3,})
  // tl2.from('.sc-instagram img:nth-child(5)',{opacity:0,},'m1')
  // tl2.from('.sc-instagram img:nth-child(6)',{opacity:0,},'m1')
  // tl2.from('.sc-instagram img:nth-child(7)',{opacity:0,},'m1')
  // tl2.from('.sc-instagram img:nth-child(8)',{opacity:0,},'m1')


  //뉴스

$('.txt-wrap .type').click(function(){
  $('.type-wrap').fadeToggle();
})




//지우지말것
})
