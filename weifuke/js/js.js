var	main={
	navUlNodes:$(".navlists"),//导航li
	navLiNodes:$(".navlists li"),//导航li
	moveINode:$(".navlist i"),//导航移动的橙色条
	mainLiNodes:$(".themain li"),//三个动图背景
	mainDotsNodes:$(".maindots span"),//动图下方三个点击的span
	leftArrNode:$(".arrows .leftarrow"),//广告下方的左箭头
	rightArrNode:$(".arrows .rightarrow"),//广告下方的右箭头
	spanClickNode:$(".ab_img .theimg span"),//关于，证书放大
	enlargeImgNode:$(".thebigimg"),
	enjoyNode:$("#enjoy"),//渠道两块第一块
	becomeNode:$("#become"),//渠道两块第二块
	enjoyIconNode:$(".enjoy_icon"),//渠道第一块显示图标
	becomeCtNode:$(".become_ct"),//渠道第二块显示内容
	joinListUl:$(".js_re_thelists"),//招聘的列表ul
	joinListLi:$(".js_re_thelists li"),//招聘的列表li
	joinListDt:$(".js_re_thelists dt"),//招聘的列表dt
	joinListDd:$(".js_re_thelists dd"),//招聘的列表dd
	
	loginNode:$(".login"),//登录按钮
	signiInNode:$("#signin"),//显示出来的登录框
	closeNode:$(".close_re"),//登录框的关闭按钮
	textReNode:$(".text_re input"),//邮箱输入框
	loginConfirmNode:$(".password_re em"),//确认登录按钮
	textErrorNode:$(".text_re em"),//提醒邮箱格式
	
	//导航部分 橙色滑动条
	navMove:function(){
		var	that=this;
		var	pos=$(".current").index();
		that.moveINode.css({left:98*pos+"px"})
		that.navLiNodes.mouseenter(function(){
			var	curPos=that.navLiNodes.index(this);
			var	iwidth=that.moveINode.width();
			that.moveINode.stop().animate({left:curPos*iwidth+"px"},400)
		});		
		that.navLiNodes.mouseleave(function(){			
			that.moveINode.stop().animate({left:98*pos+"px"},400)			
		});	
		//console.log($(".current").index())
		
	},
	//main部分三张图片
	mainMove:function(){
		var that=this;
		that.mainDotsNodes.click(function(){
			if($(this).hasClass("current")){
		 			return;
		 	}			
			var curPos=$(this).index();
		 	var oldPos=$(".maindots .current").index();
		 	//span节点变色
			that.mainDotsNodes.eq(curPos).addClass("current");
		 	that.mainDotsNodes.eq(oldPos).removeClass("current");
		 	//背景淡入淡出
		 	that.mainLiNodes.eq(curPos).stop(true,true).fadeIn(700);
		 	that.mainLiNodes.eq(oldPos).stop(true,true).fadeOut(700);		 	
		 	if(curPos>oldPos){
		 		var	cur=curPos+1;
		 		var	old=oldPos+1;
		 		if(curPos==2){
		 		$(".flash"+cur+"_img1").css({marginLeft:"2000px"});
		 		$(".flash"+cur+"_img2").css({marginLeft:"2000px"});
		 		$(".flash"+cur+"_img3").css({marginLeft:"2000px"});
		 		}
		 		
		 		
		 		//旧的位置改变
		 		$(".flash"+old+"_img1").stop().animate({marginLeft:"-2000px"},1000).fadeOut(500);
		 		$(".flash"+old+"_img2").stop().animate({marginLeft:"-2000px"},1000).fadeOut(500);
		 		$(".flash"+old+"_img3").stop().delay(200).animate({marginLeft:"-2000px"},1000).fadeOut(500);
		 		//新的位置改变
		 		$(".flash"+cur+"_img1").stop().delay(200).fadeIn(500).animate({marginLeft:"-380px"},1000);
		 		$(".flash"+cur+"_img2").stop().delay(200).fadeIn(500).animate({marginLeft:"-382px"},1000);
		 		$(".flash"+cur+"_img3").stop().delay(200).fadeIn(500).animate({marginLeft:"163px"},1000);
		 		
		 		
		 	}
		 	console.log(oldPos>curPos)
			if(curPos<oldPos){
				var	cur=curPos+1;
		 		var	old=oldPos+1;		 		
		 		if(curPos!=0 && curPos!=2){
		 			$(".flash"+cur+"_img1").css({marginLeft:"2000px"});
		 			$(".flash"+cur+"_img2").css({marginLeft:"2000px"});
		 			$(".flash"+cur+"_img3").css({marginLeft:"2000px"});		 			
		 		}	 		
		 		$(".flash"+old+"_img1").stop().animate({marginLeft:"2000px"},1000).fadeOut(500);
		 		$(".flash"+old+"_img2").stop().animate({marginLeft:"2000px"},1000).fadeOut(500);
		 		$(".flash"+old+"_img3").stop().delay(200).animate({marginLeft:"2000px"},1000).fadeOut(500);	
		 		
		 		$(".flash"+cur+"_img1").stop().delay(200).fadeIn(500).animate({marginLeft:"-380px"},1000);
		 		$(".flash"+cur+"_img2").stop().delay(200).fadeIn(500).animate({marginLeft:"-382px"},1000);
		 		$(".flash"+cur+"_img3").stop().delay(200).fadeIn(500).animate({marginLeft:"163px"},1000);
			}			
		});	
	},
	//登录框的效果
	thhelogin:function(){
		var	that=this;
		function maopao(e){
			var event=window.event || e;
			if(event.stopPropagation){
				event.stopPropagation();
			}
			else{
				event.cancelBubble=true;
			}
		};		
		that.loginNode.click(function(){
			that.signiInNode.show();
			maopao(event);
		});		
		that.closeNode.click(function(){
			that.signiInNode.hide();
		});
		that.signiInNode.click(function(e){
			maopao(e);
		});		
		$(document).click(function(){
			that.signiInNode.hide();
		});	
		//检查邮箱
		var emailREG=new RegExp("\\b(^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@([A-Za-z0-9-])+(\\.[A-Za-z0-9-]+)*((\\.[A-Za-z0-9]{2,})|(\\.[A-Za-z0-9]{2,}\\.[A-Za-z0-9]{2,}))$)\\b");
		that.loginConfirmNode.click(function(){	
			console.log($.trim,that.textReNode.val())
			var email=$.trim(that.textReNode.val());
			var bool=emailREG.test(email);
			if(bool){
				that.textErrorNode.hide();
			}
			else{
				that.textErrorNode.show();
			}		
		});
//		function space(abc){//删除字符串左右两端空格的;
//			var reg=/(^\s*)|(\s*$)/g;
//			var val=abc.replace(reg,"");
//			return val;
//		};
		
	},

	//广告部分的移动
	adsiconsMove:function(){
		var	that=this;
		
		that.leftArrNode.click(function(){
			var	adDivNode=$("#adicon");
			var	first=adDivNode.children().first();
			var	last=adDivNode.children().last();
			first.stop().animate({marginLeft:"-1100px"},400,function(){				
				first.before(last);
				first.css({marginLeft:"0px"})
			})
		});
		
		that.rightArrNode.click(function(){
			var	adDivNode=$("#adicon");
			var	first=adDivNode.children().first();
			var	last=adDivNode.children().last();
				first.before(last);
				last.css({marginLeft:"-1100px"})
			last.stop().animate({marginLeft:"0px"},1000,function(){				
					
			})						
		});
		
	},
	//关于，证书点击放大
	enlargeImg:function(){
		var	that=this;	
		that.spanClickNode.mouseenter(function(){
			that.enlargeImgNode.show();
		});
		that.spanClickNode.mouseleave(function(){
			that.enlargeImgNode.hide();
		})
	},
	///渠道两块点击显示
	qudaoclickHideShow:function(){
		var	that=this;
		that.enjoyNode.click(function(){
			that.enjoyIconNode.show();
			that.becomeCtNode.hide();
		});
		
		that.becomeNode.click(function(){
			that.enjoyIconNode.hide();
			that.becomeCtNode.show();
		});
	},
	//加入我们
	joinUsListMove:function(){
		var	that=this;
		that.joinListDt.click(function(){
			$(this).siblings().slideToggle();			
		});
	},
	
	
	
	init:function(){
		var	that=this;
		
		that.navMove();
		that.mainMove();
		that.adsiconsMove();
		that.qudaoclickHideShow();
		that.enlargeImg();
		that.joinUsListMove();
		that.thhelogin();
	}
};

main.init();

//申请表联动
var	areaObj={
	//firstInputVal:$("#thelabel .shen input").val(),
	shenSelectNode:$("#thelabel .shen select"),//省一级的菜单
	//shenOptionNode:$("#thelabel .shen option"),//省一级的菜单下面可选的dd
	shiSelectNode:$("#thelabel .shi select"),//市一级的菜单
	//shiOptionNode:$("#thelabel .shi option"),//市一级的菜单下面可选的dd
	shenDivNode:$("#thelabel .shen div"),//省div
	//shenInputNode:$("#thelabel .shen input"),//省输入框	
	//shenVal:null,
	province:areaJson.province,//省的数据，json类型
	city:areaJson["city"],//地级市数据，json类型
	//shiInputNode:$("#thelabel .shi input"),//市输入框
	
	entershow:function(){
		var that=this;
		that.shenDivNode.mouseenter(function(){
			that.shenSelectNode.show();			
			that.shenClick();
		});
//		that.shenDivNode.mouseleave(function(){
//			that.shenSelectNode.hide();
//			
//			//that.shenClick();
//		});
	},
	shenClick:function(){
		var that=this;	
		var frag=document.createDocumentFragment();//创建碎片
		for(var i in that.province){
			var shenOptionNode=document.createElement("option");
			shenOptionNode.innerHTML=that.province[i]
			shenOptionNode.value=i;
			frag.appendChild(shenOptionNode);
		}
		that.shenSelectNode.html("<option value=\"\">"+"请选择省份"+"</option>")
		that.shenSelectNode.append(frag);						
	},
	
	erji:function(){
		var that=this;
		
		that.shenSelectNode.change(function(){
			$(this).hide();
			var shenInputNode=$("#thelabel .shen input");//省输入框
			shenInputNode.val(that.province[this.value])
			
			var val=this.value;
			var cityJson=that.city[val];
						
			var frag=document.createDocumentFragment();//创建碎片
		for(var i in cityJson){
			var shiOptionNode=document.createElement("option");
			shiOptionNode.innerHTML=cityJson[i]
			shiOptionNode.value=i;
			frag.appendChild(shiOptionNode);
		}
			that.shiSelectNode.html("<option value=\"\">"+"请选择市"+"</option>");
			that.shiSelectNode.append(frag);
			that.shiSelectNode.show();
			theval=val;
			
		});
		
		that.shiSelectNode.change(function(){
			var val=this.value;
			var shiInputNode=$("#thelabel .shi input");//shi输入框
			console.log(that.city[theval][val]);
			shiInputNode.val(that.city[theval][val]);
			that.shiSelectNode.hide();
		});
		
	},
	
	
	
	
	
	inite:function(){
		var that=this;
		that.entershow();
		
		that.erji();
	}
}
areaObj.inite();