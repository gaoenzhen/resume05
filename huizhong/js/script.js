$('.nav li, dd').mouseenter(function(){
	$(this).children('.nav_dl').show();
	$(this).children('.nav_dl_dl').show();
});
$('.nav li, dd').mouseleave(function(){
	$(this).children('.nav_dl').hide();
	$(this).children('.nav_dl_dl').hide();
});
$(".Js_slider").mouseenter(function(){
	$(".slider-left").show();
	$(".slider-right").show();
});
$(".Js_slider").mouseleave(function(){
	$(".slider-left").hide();
	$(".slider-right").hide();
});





/*淡入淡出*/
$(".btn-list li").mouseenter(function(){
	var _this=$(this);
	if($(this).hasClass("current")){
		return;
	}
	var curPos=_this.index(".btn-list li");//当`前的位置
	var oldPos=$(".btn-list .current").index(".btn-list li");//旧的位置
	console.log(curPos,oldPos);
	$(".btn-list li").eq(curPos).addClass("current");
	$(".btn-list li").eq(oldPos).removeClass("current");
	
	$(".slider-img li").eq(curPos).fadeIn(300);
	$(".slider-img li").eq(oldPos).fadeOut(300);
});
$(".slider-right").click(function(){
	var lastPos=$(".slider-img li").length-1;
	var oldPos=$(".btn-list .current").index(".btn-list li");
	curPos=oldPos!=lastPos?oldPos+1:0;
	$(".btn-list li").eq(curPos).addClass("current");
	$(".btn-list li").eq(oldPos).removeClass("current");
	$(".slider-img li").eq(curPos).fadeIn(300);
	$(".slider-img li").eq(oldPos).fadeOut(300);
});
$(".slider-left").click(function(){
	var lastPos=$(".slider-img li").length-1;
	var oldPos=$(".btn-list .current").index(".btn-list li");
	curPos=oldPos!=0?oldPos-1:lastPos;
	$(".btn-list li").eq(curPos).addClass("current");
	$(".btn-list li").eq(oldPos).removeClass("current");
	$(".slider-img li").eq(curPos).fadeIn(300);
	$(".slider-img li").eq(oldPos).fadeOut(300);
});





/*关于左边*/
$(".about_left").mouseenter(function(){
	$(".about_left img").stop().animate({width:"540px",height:"265px"});
	$(".about_left em").stop().animate({bottom:"0"});
});
$(".about_left").mouseleave(function(){
	$(".about_left img").stop().animate({width:"491px",height:"241px"});
	$(".about_left em").stop().animate({bottom:"-120px"});
});


/*球*/
$(".index_app_list li").mouseenter(function(){
	if($(this).hasClass("li_cur")){
		return;
	}
	var oldPos=$(".li_cur").index();//旧的位置
	$(this).addClass("li_cur").stop().animate({width:"312px"},100);
	$(".index_app_list li").eq(oldPos).removeClass("li_cur").stop().animate({width:"0px"},100);
});



/*关于右边*/
$(".btn-1 a").click(function(){
	var firstPos=$(".right_list li:first");
	$(".right_list").append(firstPos);
});
$(".btn-2 a").click(function(){
	var lastPos=$(".right_list li:last");
	$(".right_list").prepend(lastPos);
});



/*合作伙伴*/
$(".partner_btn_1 a").click(function(){
	$(".partner_list li:first").stop().animate({marginLeft:"-202px"},100,function(){
		$(".partner_list").append($(".partner_list li:first"));
		$(this).css({marginLeft:"0px"})
	})
});
$(".partner_btn_2 a").click(function(){
	$(".partner_list li:last").css({marginLeft:"-202px"});
	$(".partner_list").prepend($(".partner_list li:last"));
	$(".partner_list li:first").stop().animate({marginLeft:"0px"},100);
});



