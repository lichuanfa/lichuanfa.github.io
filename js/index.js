;(function($){
	//tab切换
	$("#nav").on("tap","a",function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	//切换动画
	$("#tap").on("touchstart",function(){
		$("#onOff").css("background-position","0 0");
	})
})(Zepto)