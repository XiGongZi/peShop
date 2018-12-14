
$.namespace("An.html");
An.html=function(){
    return {
        pageIndex:function(){//index页需要执行的内容
        	$(window).resize(function(){//尺寸改变事件
			  An.Slide.ResizeBanner();
			  //  禁止移动端放大缩小
			  var scrWid=$(window).width();
			  $("head #ctrlFS").attr("content","width="+scrWid+",inital-scale=1.0,user-scalable=no");

			  An.Public.ForInSetCenter(setDivCenterArray);
			});
        },
        pageList:function(){//index页需要执行的内容
        	An.source.list_firstList(goodsClassesList_json);//加载 内容
        	$(window).resize(function(){//尺寸改变事件
			  //  禁止移动端放大缩小
			  var scrWid=$(window).width();
			  $("head #ctrlFS").attr("content","width="+scrWid+",inital-scale=1.0,user-scalable=no");
			  An.Public.ForInSetCenter(setDivCenterArray);
			});
        },
        pageGoodsDetails:function(){//index页需要执行的内容
        	An.source.list_firstList(goodsClassesList_json);//加载 内容
        	An.source.list_secondList(theSecList_json);//加载 内容
        	$(window).resize(function(){//尺寸改变事件
			  //  禁止移动端放大缩小
			  var scrWid=$(window).width();
			  $("head #ctrlFS").attr("content","width="+scrWid+",inital-scale=1.0,user-scalable=no");
			  An.Public.ForInSetCenter(setDivCenterArray);
			});
        },
        pageXiao:function(){//index页需要执行的内容
        	An.source.enter_ten_bg(enten_ten_json);//加载 内容
        	An.Public.ForInSetCenter(setDivCenterArray);//设置位置
        }
    };
}();
$.namespace("An.source");
An.source=function(){
	var json;
    return {
        enter_ten_bg:function(json){//入口（十个）
        	An.main.enter_ten_HTML();//添加dom结构
        	$(".MaxAn[AnType='enter_ten'] ul li").each(function(i){
        		$(this).attr("AnUrl",json[i].href);//添加跳转地址
        		$(this).find(".enter_ten_bg").attr("src","./static/image/"+json[i].imgName+"");
        		$(this).find(".enter_ten_word").html(json[i].tab);
    		});
        },
		list_firstList:function(json){
			//第二列表里初始值为第一列表的第一个选项，后每点击第一列表的选项一次，就请求一次服务器加载到右边。
			//list.html 左侧分类列表加载+响应点击事件
			var list_str="";
			$.each(json,function(i,n){
				list_str+='<div typeCode="'+n.type_code+'">'+n.name+'</div>';//将所有内容统一放一个容器里再加载到dom里，以减少重排重绘次数
			});
			$('.MaxAn[AnType="goodsList"] .theFirList').append(list_str);//加载进dom
			$('.MaxAn[AnType="goodsList"] .theFirList>div').eq(0).attr("class","select");//设置默认高亮
		},
		list_secondList:function(json){
			var theSecList_str="";
			$.each(json,function(i,n){ //将goods内容添加进 theSecList_str 变量里
				var list_str="";
				$.each(n.list_goods_json,function(j,k){
					list_str+='<li class="goodsList" AnUrl="'+k.href+'"><div><img class="goodsList_img" src="'+k.imgName+'" alt=""></div><div><div class="goodsList_word">'+k.name+'</div></div></li>'
				});
				theSecList_str+='<div class="title"><div class="name">'+n.title+'</div></div><ul class="goods">'+list_str+'<br style="clear:both"/></ul>';
			});
			$('.theSecList').append(theSecList_str);  //输出 theSecList_str 变量
		},
		addGoodsListMain:function (json){
			var str = "";
			$.each(json,function(i,n){
				str += '<div class="goods" AnUrl="'+n.pageUrl+'"><div class="img"><img src="'+n.imgUrl+'" alt=""></div><div class="introduce">'+n.introduce+'</div><div class="others"><div class="price"><s>$'+n.prePrice+'</s><b>$'+n.price+'</b><div>月销<b>'+n.salesMon+'</b></div></div><div class="buy">立即购买</div></div></div>';
			});	
			$(".MaxAn[AnType='goodsListMain']").append(str);
			An.Public.setDivWidth('.MaxAn[AnType="goodsListMain"] .goods>*');
		},
		addShoppingCarts:function (json){
			var titleStr="";
			$.each(json,function(i,n){
				var bodyStr="";
				titleStr+='<div class="MaxAn" AnType="space40px"></div><div class="shoppingCart"><div class="title"><span class="checkAll"><input type="checkbox"  class="regular-checkbox " ShopCode="'+n.shopCode+'"><label for="check" name="checkAll" ></label></span><div class="shopName">'+n.shopName+'</div></div><br style="clear:both"/>';
				$.each(n.body,function(j,k){
					bodyStr+='			<div class="body">				<span class="checkThis">					<input type="checkbox" ShopCode="'+n.shopCode+'" quantity="'+k.quantity+'" price="'+k.price+'" goodsCode="'+k.goodsCode+'"   class="regular-checkbox " >					<label for="check" name="checkThis"></label>				</span>				<div class="MaxAn" AnType="space40px"></div>				<img src="'+k.imgUrl+'" alt=""/>				<div class="MaxAn" AnType="space40px"></div>				<div class="goods">					<div class="supHead">'+k.supHead+'</div>					<div class="subHead">'+k.subHead+'</div>					<div class="MaxAn" AnType="space40px"></div>					<div class="price">						<div class="unitPrice" style="float:left">$'+k.price+'</div>						<div class="quantity" style="float:right">x'+k.quantity+'</div>					</div>				</div>			</div>			<br style="clear:both"/>';
				});
				titleStr+=bodyStr;
				titleStr+='</div>';
			});
			$(".MaxAn[AnType='shoppingCart_normal_list']").html(titleStr);
		},
		addPartiPageInfo:function(json){
			// 加载banner
			An.main.addBanner(json.banner_json);
			// 加载店铺信息
			var zhi1 = json.shopInfo;
			var zhi2 = json.evalutes;
			$('.MaxAn[AnType="parti_shopInfo"]').html('<div class="title">		<div class="MaxAn" AnType="space40px"></div>		<div class="headImg">			<div><img src="'+zhi1.shopImg+'" alt=""></div>		</div>		<div class="MaxAn" AnType="space40px"></div>		<div class="shopName">			<div class="MaxAn" AnType="space40px"></div>			<div class="name">'+zhi1.shopName+'</div>		</div>		<div class="link">			<div class="MaxAn" AnType="space40px"></div>			<div class="name">店铺</div>		</div>		<div class="MaxAn" AnType="space40px"></div>	</div>	<div class="body">	<div class="MaxAn" AnType="space40px"></div>		<span class="moreInfo">			<div class="moreInfoUp">'+zhi1.salePerMon+'</div>			<div class="moreInfoDown">月销量</div>		</span>		<span class="moreInfo">			<div class="moreInfoUp">'+zhi1.collect+'</div>			<div class="moreInfoDown">收藏数</div>		</span>		<span class="moreInfo2">			<div class="MaxAn" AnType="space40px"></div>			<div class="moreInfoUp">描述相符：<b style="color:red">'+zhi1.descript+'</b></div>			<div class="moreInfoDown">质量相符：<b style="color:red">'+zhi1.quality+'</b></div>		</span>	<div class="MaxAn" AnType="space40px"></div>	</div>	<div class="MaxAn" AnType="space40px"></div>');
			// 加载详情页图片集
			var str3 = '';
			$.each(json.imgDetails,function(i,n){
				str3 += '<img src="'+n+'" alt="" />';
			});
			$('.MaxAn[AnType="partiPage_imgDetails"]').html(str3);
			// 加载评价
				//title 
			$('.MaxAn[AnType="evaluate"] .title .evaName .quantity').html("买家评价 "+zhi2.evaQuality);
				//标签
			var str1="";
			$.each(zhi2.barDetauls,function(i,n){
				str1+= "<div>"+n+"</div>";
			});
			$('.MaxAn[AnType="evaluate"] .title .bar .barDetails').html(str1);
				//最优评价
			var str2 = '';
			var zhi3 = zhi2.evalute;
			$.each(zhi3,function(i,n){
				var str3 = '';
				str2 += '				<div class="evas" userid="'+n.userId+'">			<div class="MaxAn" AnType="space40px"></div>			<div class="headImg">				<div class="img">					<img src="'+n.userImg+'" alt="">				</div>				<div class="userName">					'+n.userName+'				</div>							</div>			<div class="MaxAn" AnType="space40px"></div>			<div class="perEva">								<div class="font">					'+n.evaTxt+'				</div>								<div class="imgs">';
				$.each(n.userUpImg,function(j,k){
					str2 += '<div class="img"><img src="'+k+'" alt=""></div>';
				});

				str2 += '				</div>				<div class="MaxAn"  style="height:40px;width:100%;border-bottom:2px solid #ccc"></div>			</div>			<div class="MaxAn" AnType="space40px"></div>			<br style="clear:both"/>		</div>				<div class="MaxAn" AnType="space40px"></div>';
			});
			$('.MaxAn[AnType="evaluate"] .body').html(str2);
		}


    };
}();
$(".MaxAn[AnType='menu'] .list .price").click(function(){
	var kg=$(".MaxAn[AnType='selectPrice']").css("display");
	if(kg == "none"){
		console.log("block");
		$(".MaxAn[AnType='selectPrice']").show();
		An.Public.ForInSetCenter(setDivCenterArray);
		kg=!kg;
	}else{
		console.log("none");
		$(".MaxAn[AnType='selectPrice']").hide();
		kg=!kg;
	}
});
//shopping


// //试验品,使地址栏携带上一页的参数
// // //获取地址栏参数，将本页名放入所有跳转页（除了返回键）的问号后，将本页prePage参数填入本页返回键上。
// // //获取页面名
// // An.index.getPageName();
// // //获取a参数值
// // An.Public.getUrlParam(a);
// function setPageEsc(){
// 	var str = "?";
// 	var pageName = An.index.getPageName();
// 	pageName = "" ? pageName = "index":pageName = pageName;
// 	var urlArr = new Array();
// 	//获取本页名，填充到各个跳转页url的pageName参数内
// 	$("*[AnUrl]").each(function(){
// 		var url = $(this).attr("AnUrl");
// 		//判断是否存在问号
// 		// urlArr.push(str.indexOf(url) != -1);
// 		if(str.indexOf(url) != -1 && url != ""){
// 			$(this).attr("AnUrl",url+"&prePage="+pageName+".html");
// 		}else{
// 			$(this).attr("AnUrl",url+"?prePage="+pageName+".html");
// 		}
// 	});
// 	//获取pageName参数值，填充到返回按钮上
// 	var prePageName = An.Public.getUrlParam("prePage");
// 	console.log(prePageName);
// 	var preUrl = $("MaxAn[AnType='topNav'] .list svg").attr("AnUrl");
// 	$("MaxAn[AnType='topNav'] .list svg").attr("AnUrl",window.location.host+"/"+prePageName);
// }

/*
技术升级绝对是带来好处的。
 */

//摇一摇事件
if (window.DeviceMotionEvent) { 
                 window.addEventListener('devicemotion',deviceMotionHandler, false);  
        } 
        var speed = 30;//speed
        var x = y = z = lastX = lastY = lastZ = 0;
        function deviceMotionHandler(eventData) {  
          var acceleration =eventData.accelerationIncludingGravity;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
                    //简单的摇一摇触发代码
                    // alert("摇一摇触发");
                }
                lastX = x;
                lastY = y;
                lastZ = z;
        }

