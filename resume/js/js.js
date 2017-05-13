window.onload=function(){
var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: false,
			    
			 	width : window.innerWidth,
			 	height : window.innerHeight,
			 	
			 	
			 	
			     pagination: '.swiper-pagination',
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    
			    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
				  }, 
  				onSlideChangeEnd: function(swiper){ 
				    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				  } 
			 });
var swiper02 = new Swiper('.swiper-container02', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
            
        },
        
    });
  };