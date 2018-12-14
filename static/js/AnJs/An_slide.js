
		// $(".slideShow>a").each(function(i){
		// $(this).html("<img src='./static/image/banner_"+(i+1)+".jpg'>");
		// });
		
$(".slideShow a").hide();
$(".slideShow a").eq(0).show();
//设置小圆点
$(".slideCir").children("div").attr("class","slideCirC");
$(".slideCir").children("div").eq(0).attr("class","slideCirS");
$.namespace("An.Slide");
An.Slide=function(){
    var arr,url;    // 定义变量
    return {
		ResizeBanner:function (){//重置小圆点位置
			scrWid=$(window).width();
			var cirSiz = parseInt(scrWid*0.3928*0.05);
			$(".slideCir div").css({"width":cirSiz,"height":cirSiz});
			$(".slideCir div").css("margin-right",cirSiz*0.8);
			var cirDivWid =  parseInt($(".slideCir").css("width"));
			var cirDivRig =  parseInt($(".slideCir div").css("margin-right"));
			var cirWid = $(".slideCir").length *(cirDivWid+cirDivRig);
			var cirLeft =(scrWid - cirWid)/2;
			$(".slideCir").css("left",cirLeft);
			var sliHei=$(".slideShow").children("a").children("img").css("height");
			var sliHei2=parseInt(scrWid*0.4*0.8);
			var sliTop=parseInt($(".slideShow").css("padding-top"));
				sliHei3=sliHei2+sliTop;
			$(".MaxAn .slideCir").css("top", sliHei3+"px");
				var sliTop=parseInt($(".slideShow").css("padding-top"));
				var banTop=parseInt(scrWid*0.4);
				$(".MaxAn .banner").css("height",banTop+"px");
			//180629
			$('.MaxAn[AnType="banner_Full"]').css("height",scrWid*0.4+"px");
		},
		 slideTab:function(){//设置循环
			if(slideTabNum>=$(".slideShow a").length){
				slideTabNum=0;
			}
			$(".slideShow a").hide();
			$(".slideShow a").eq(slideTabNum).show();
			$(".slideCir").children("div").removeAttr("class","slideCirs");
			$(".slideCir").children("div").attr("class","slideCirC");
			$(".slideCir").children("div").eq(slideTabNum).attr("class","slideCirS");
			slideTabNum=slideTabNum+1;
		}
    };
}();
var setIntervalK=setInterval(function(){
	An.Slide.slideTab();
},3000);//设置轮播时间
var slideTabNum=1;
An.Slide.ResizeBanner();
$(".slideCir > div").click(function(i){
	var kk=$(this).index();
	$(".slideShow a").hide();
	$(".slideShow a").eq(kk).show();
	$(".slideCir").children("div").removeAttr("class","slideCirs");
	$(".slideCir").children("div").attr("class","slideCirC");
	$(".slideCir").children("div").eq(kk).attr("class","slideCirS");
	slideTabNum=kk;
});