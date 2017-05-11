var fontAuto={
	fontFun:function(width){
	//width表示效果图的尺寸
	//让网页的宽度随着浏览器的宽度变化为变化，按比例缩放网页
		var winWidth=document.documentElement.clientWidth;//网页的可视宽度
		var htmlNode=document.documentElement;//html标签
		if(winWidth>=width){
			htmlNode.style.fontSize="625%";
		}
		else{
			htmlNode.style.fontSize=winWidth/width*625+"%";
		}
	},
	init:function(){/*初始化*/
		var obj=this;
		obj.fontFun(640);//调用fontFun函数
		window.onresize=function(){//窗口变化时触发函数
			obj.fontFun(640);
		}
	}
};

fontAuto.init();