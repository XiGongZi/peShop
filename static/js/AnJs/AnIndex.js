//命名空间！
$.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=a[i].split(".");
        o=window;
        for (j=0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
};
//公共js ------------start
var scrWid=$(window).width();
//公共js ------------over


// An.index 的下面命名方式。(安全声明？)
// index 引导页函数
$.namespace("An.index");
An.index=function(){
    var arr,url;    // 定义变量
    return {
        loadStyle:function(url){//定义函数内容 //动态加载css
		    var script;
		    script = document.createElement("link");
		    script.href = url;
		    script.rel = "stylesheet";
		    document.head.appendChild(script);
        },
        loadStylePre:function(url){//定义函数内容 //动态加载css
		    var script;
		    script = document.createElement("link");
		    script.href = url;
		    script.rel = "stylesheet";
		    document.head.prepend(script);
        },        
        loadScript:function(url){ //动态加载js
		    var script;
		    script = document.createElement("script");
		    script.src = url;
		    document.body.appendChild(script);
        },
        getPageName:function(){ //获取页面名称(无视后缀名)
        	var a = location.href;
		    var b = a.split("/");
		    var c = b.slice(b.length-1, b.length).toString(String).split(".");
		    return c.slice(0, 1);
        },
        isRepeat:function(arr){ //判断数组是否存在重复元素，存在返回true，否则返回false
			var hash = {};
			for(var i in arr) {
				if(hash[arr[i]])
				return true;
				hash[arr[i]] = true;
			}
			return false;	
        },
		detectmob:function () {
		    if( navigator.userAgent.match(/Android/i)
		    || navigator.userAgent.match(/webOS/i)
		    || navigator.userAgent.match(/iPhone/i)
		    || navigator.userAgent.match(/iPad/i)
		    || navigator.userAgent.match(/iPod/i)
		    || navigator.userAgent.match(/BlackBerry/i)
		    || navigator.userAgent.match(/Windows Phone/i)
		    ){
		    	return true;
		    }
		    else {
		    	return false;
		    }
		}

    };
}();

// var page = An.index.getPageName();
// if(An.index.detectmob()){//如果不是pc则
// 	var a = location.href;
// 	var b = a.split("/pc/");
// 	window.location.href=b[0]+"/pe/"+b[1];
// }else{//如果是pc则
// 	var a = location.href;
// 	var b = a.split("/pe/");
// 	window.location.href=b[0]+"/pc/"+b[1];
// }











// function setPageEsc(){
// 	var str = "?";
// 	var pageName = An.index.getPageName();
// 	var a = window.location.href;
// 	pageName = "" ? pageName = "index":pageName = pageName;
// 	var urlArr = new Array();
// 		var preEquimStr = "preEqui=";
// 		var preBol = a.indexOf(preEquimStr) == -1;//不含有"preEqui="为true，含有为false
// 		console.log(preBol);
// 		var thisEqui = "";
// 		An.index.detectmob()?thisEqui="pe":thisEqui="pc";
// 		// alert(thisEqui);
// 		if(preBol){//不含有preEqui这个参数名,则加上这个参数名
// 			var b= a.indexOf(str) != -1;//含有 "?"为true，否则为false
// 			var c="";
// 			b?c="&":c="?";
// 			console.log(c);
// 			window.location.href=a+c+"preEqui="+thisEqui;
			
// 		}else{//含有preEqui这个参数名，则判断是否一致，一致则不操作，否则改变
// 			var bol1 = An.Public.getUrlParam("preEqui") == thisEqui ;
// 			if(!bol1){
// 				var zhi = An.Public.getUrlParam("preEqui");
// 				var zhi1 = a.split("/"+zhi+"/");
// 				console.log(zhi1[0]+"/"+thisEqui+"/"+zhi1[1]);
// 				d=zhi1[0]+"/"+thisEqui+"/"+zhi1[1];
// 			};
// 		}

// }



 // 禁止移动端放大缩小

$("head").prepend('<meta name="viewport" id="ctrlFS" content="width='+scrWid+',inital-scale=1.0,user-scalable=no">');

//设置常量集合------------start
$.namespace("An.const");
An.const=function(){
    return {
        enter_ten__boxHei:0.431,
        shoppingMall_boxHei:0.304,
        positiveInteger_regular:/^[0-9]*[1-9][0-9]*$/
    };
}();
//设置常量集合------------over
//设置一个特定页面名数组，内为指定页面名称的集合。------------start
var pageNameArr_banner = new Array();
var pageNameArr_xiao = new Array();
pageNameArr_banner=[//轮播图
	An.index.getPageName(),
	"",
	"index"
];
pageNameArr_xiao=[//xiao
	An.index.getPageName(),
	"xiao"
];
if(An.index.isRepeat(pageNameArr_banner)){//用isRepeat的返回值去限定特定页面所需加载的外部资源。

}
if(An.index.isRepeat(pageNameArr_xiao)){//xiao
	An.index.loadStylePre("./static/css/AnCss/AnIndex.css");
	An.index.loadStyle("./static/css/pic.css");
	An.index.loadScript("./static/js/AnJs/AnPackage.js");
	An.index.loadScript("./static/js/AnJs/AnMain.js");
	An.index.loadScript("./static/js/pic.js");
}


An.index.loadScript("http://pv.sohu.com/cityjson?ie=utf-8");//获取地理位置的搜狐api


//设置一个特定页面名数组，内为指定页面名称的集合。------------over

var enten_ten_json=[{
		"imgName":"5ad87bf0N66c5db7c.png",
		"tab":"生鲜",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5ad87b67N1ebcb69b.png",
		"tab":"棉纺",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5ad87cf5N4ad8e6f1.png",
		"tab":"优惠券",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5ad882eeN701fb60d.png",
		"tab":"唯品会",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5ae41d1aN7c1bb190.png",
		"tab":"超市",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5b0cea29N8fb2865f.png",
		"tab":"物流",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5b03b74eN3541598d.png",
		"tab":"充值",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5b03b779N5c0b196f.png",
		"tab":"钱包",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5b03b902N8cc08b40.png",
		"tab":"榜单",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"5b03fae3N67f78fe3.png",
		"tab":"拼购",
		"href":"http://www.baidu.com"
	},];


	var shoppingMall_json={
		"type_code":"00001",
		"title":"精挑细选",
		"goods":[{
			"state_code":"2",
			"imgName":"5a71944aN539da366.jpg",
			"imgName2":"5b1909fdNf883f5e4.jpg",
			"supHead":"绝地求生",
			"subHead":"吃鸡带你飞",
			"href":"./goodsDetails.html"
		},
		{
			"state_code":"1",
			"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
			"imgName2":"null",
			"supHead":"三好学生",
			"subHead":"00后学习装备",
			"href":"./goodsDetails.html"
		},
		{
			"state_code":"1",
			"imgName":"5aead22eN3524fae3.jpg",
			"imgName2":"null",
			"supHead":"办公神器",
			"subHead":"工作更高效",
			"href":"./goodsDetails.html"
		}]
	};
	var goodsTitle_json=[
		{
		"type_code":"00001",
		"title":"精挑细选",
		"goods":[{
				"state_code":"2",
				"imgName":"5a71944aN539da366.jpg",
				"imgName2":"5b1909fdNf883f5e4.jpg",
				"supHead":"绝地求生",
				"subHead":"吃鸡带你飞",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"5aead22eN3524fae3.jpg",
				"imgName2":"null",
				"supHead":"办公神器",
				"subHead":"工作更高效",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"2",
				"imgName":"5a71944aN539da366.jpg",
				"imgName2":"5b1909fdNf883f5e4.jpg",
				"supHead":"绝地求生",
				"subHead":"吃鸡带你飞",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"2",
				"imgName":"5a71944aN539da366.jpg",
				"imgName2":"5b1909fdNf883f5e4.jpg",
				"supHead":"绝地求生",
				"subHead":"吃鸡带你飞",
				"href":"./goodsDetails.html"
			}]
		},
				{
		"type_code":"00002",
		"title":"为您推荐",
		"goods":[{
				"state_code":"2",
				"imgName":"5a71944aN539da366.jpg",
				"imgName2":"5b1909fdNf883f5e4.jpg",
				"supHead":"绝地求生",
				"subHead":"吃鸡带你飞",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"5aead22eN3524fae3.jpg",
				"imgName2":"null",
				"supHead":"办公神器",
				"subHead":"工作更高效",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			}]
		},
				{
		"type_code":"00003",
		"title":"精挑细选",
		"goods":[{
				"state_code":"2",
				"imgName":"5a71944aN539da366.jpg",
				"imgName2":"5b1909fdNf883f5e4.jpg",
				"supHead":"绝地求生",
				"subHead":"吃鸡带你飞",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"5aead22eN3524fae3.jpg",
				"imgName2":"null",
				"supHead":"办公神器",
				"subHead":"工作更高效",
				"href":"./goodsDetails.html"
			}]
		},
				{
		"type_code":"00004",
		"title":"精挑细选",
		"goods":[{
				"state_code":"2",
				"imgName":"5a71944aN539da366.jpg",
				"imgName2":"5b1909fdNf883f5e4.jpg",
				"supHead":"绝地求生",
				"subHead":"吃鸡带你飞",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"./goodsDetails.html"
			},
			{
				"state_code":"1",
				"imgName":"5aead22eN3524fae3.jpg",
				"imgName2":"null",
				"supHead":"办公神器",
				"subHead":"工作更高效",
				"href":"./goodsDetails.html"
			}]
		},
		];
//1.添加标题
//2.在标题后添加goods（添加几次可定）
//2.添加第二个标题


var goodsClassesList_json=[
{
	"type_code":"00001",
	"name":"为您推荐"
},
{
	"type_code":"00002",
	"name":"男装"
},
{
	"type_code":"00003",
	"name":"女装"
},
{
	"type_code":"00004",
	"name":"内衣"
},
{
	"type_code":"00005",
	"name":"电脑办公"
},
{
	"type_code":"00006",
	"name":"美妆护肤"
},
{
	"type_code":"00007",
	"name":"家用电器"
},
{
	"type_code":"00008",
	"name":"汽车用品"
},
{
	"type_code":"00009",
	"name":"母婴产品"
},
{
	"type_code":"00001",
	"name":"为您推荐"
},
{
	"type_code":"00002",
	"name":"男装"
},
{
	"type_code":"00003",
	"name":"女装"
},
{
	"type_code":"00004",
	"name":"内衣"
},
{
	"type_code":"00005",
	"name":"电脑办公"
},
{
	"type_code":"00006",
	"name":"美妆护肤"
},
{
	"type_code":"00007",
	"name":"家用电器"
},
{
	"type_code":"00008",
	"name":"汽车用品"
},
{
	"type_code":"00009",
	"name":"母婴产品"
},
{
	"type_code":"00001",
	"name":"为您推荐"
},
{
	"type_code":"00002",
	"name":"男装"
},
{
	"type_code":"00003",
	"name":"女装"
},
{
	"type_code":"00004",
	"name":"内衣"
},
{
	"type_code":"00005",
	"name":"电脑办公"
},
{
	"type_code":"00006",
	"name":"美妆护肤"
},
{
	"type_code":"00007",
	"name":"家用电器"
},
{
	"type_code":"00008",
	"name":"汽车用品"
},
{
	"type_code":"00009",
	"name":"母婴产品"
}
];

var theSecList_json=[
{ 
	"title":"商超便利",
	"list_goods_json":[
	{
		"imgName":"./static/image/5a71944aN539da366.jpg",
		"href":"./shoppingCartNone.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5aead22eN3524fae3.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5b1909fdNf883f5e4.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5b1909fdNf883f5e4.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5a71944aN539da366.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	}
	]
},
{ 
	"title":"热门分类",
	"list_goods_json":[
	{
		"imgName":"./static/image/5a71944aN539da366.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5aead22eN3524fae3.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5b1909fdNf883f5e4.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5b1909fdNf883f5e4.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5a71944aN539da366.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	}
	]
},
{ 
	"title":"家电热搜",
	"list_goods_json":[
	{
		"imgName":"./static/image/5a71944aN539da366.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5aead22eN3524fae3.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5b1909fdNf883f5e4.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5b1909fdNf883f5e4.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	},
	{
		"imgName":"./static/image/5a71944aN539da366.jpg",
		"href":"./goodsDetails.html",
		"name":"显示器"
	}
	]
}
];

var shoppingCart_json = [
	{
		"shopName":"夏之光 旗舰店",
		"shopCode":"0000000001",
		"body":[
			{
				"goodsCode":"00001000x",
				"imgUrl":"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
				"supHead":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
				"subHead":"尺寸：xxy 颜色：红",
				"prePrice":"20",
				"price":"15.5",
				"quantity":"1"
			},
					{
				"goodsCode":"000010091",
				"imgUrl":"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
				"supHead":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
				"subHead":"尺寸：xxy 颜色：红",
				"prePrice":"20",
				"price":"15.5",
				"quantity":"1"
			},
					{
				"goodsCode":"0000100sa",
				"imgUrl":"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
				"supHead":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
				"subHead":"尺寸：xxy 颜色：红",
				"prePrice":"20",
				"price":"15.5",
				"quantity":"2"
			}
		]
	},
	{
		"shopName":"神州 旗舰店",
		"shopCode":"0000000002",
		"body":[
			{
				"goodsCode":"000010asd",
				"imgUrl":"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
				"supHead":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
				"subHead":"尺寸：xxy 颜色：红",
				"prePrice":"20",
				"price":"15.5",
				"quantity":"3"
			},
					{
				"goodsCode":"000010091",
				"imgUrl":"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
				"supHead":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
				"subHead":"尺寸：xxy 颜色：红",
				"prePrice":"20",
				"price":"15.5",
				"quantity":"1"
			}
		]
	}
];


var addGoodsListMain_json=[
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180328_7bd835ldbadckj8k2hj77fl6l6g30_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180413_7gjd4ihlflc4kad2ff55eaeeja1gj_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180614_3ij20f9f2dja0fk58b0394i12a6c9_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180616_5bkj5jfb6eih33kl9eal9jfeki53f_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180623_5d6b83j571j7kkjdh7e1c0lai99g1_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180624_112lf4k47j87d2hgkf15blcke9957_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180625_7adhdeh60fg7381a9egb842442j2i_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	},
	{
		"pageUrl":"./particulars.html?shopCode=00000001",
		"imgUrl":"./static/image/shoots/180629_2iej5g5d306471je9464b0b764fi0_640x960.jpg",
		"introduce":"三星（SAMSUNG） 300E5M-X0L高清大屏i5独显双硬盘轻薄娱乐办公笔记本电脑 黑色 15.6英寸 酷睿i5-5200 套餐三 4G内存/1TB+256G固态硬盘",
		"prePrice":"14.5",
		"price":"11.5",
		"salesMon":"50"
	}
];


// setInterval(function(){addGoodsListMain(addGoodsListMain_json);},3000);





var proto_json=[
{
	"protoName":"尺寸",
	"proto":[
		"XL",
		"XXL",
		"XXXL",
		"XXXXL",
		"XXXXXL",
		"XXXXXXL",
		"XXXXXXXL"
	]
},
{
	"protoName":"颜色",
	"proto":[
		"红",
		"橙",
		"黄",
		"绿",
		"青",
		"蓝",
		"紫"
	]
}
];
addProtoType(proto_json);
function addProtoType(json){
	var strAll = "";
	$.each(json,function(i,n){
		var str='	<div class="proto">		<div class="MaxAn" AnType="space40px"></div>		<div class="title"><div>'+n.protoName+'</div></div>		<div class="bodyMax">';
		$.each(n.proto,function(j,k){
			str+='<div class="body">'+k+'</div>';
		});
		str+='		</div>		<div class="MaxAn" AnType="space40px"></div>		<br style="clear:both"/>	</div>';
		strAll+=str;
	});
	strAll+='	<div class="quantity">		<div class="MaxAn" AnType="space40px"></div>		<div class="title"><div>数量</div></div>		<div class="MaxAn" AnType="space40px"></div>		<div class="button sub">-</div>			<input class="input" type="text" value="1" onkeyup="value=value.replace(/[^\d]/g,'+''+')">		<div class="button add">+</div>				<div class="MaxAn" AnType="space40px"></div>		<br style="clear:both"/>	</div>	';

	$('.MaxAn[AnType="selectGoodsProto"]').html(strAll);
}

//加减商品数量的控制
$('.MaxAn[AnType="selectGoodsProto"] .quantity .sub').click(function(){
	var zhi = parseInt($('.MaxAn[AnType="selectGoodsProto"] .quantity .input').val());
	if(An.const.positiveInteger_regular.test(zhi)){
		if(zhi>1){
			$('.MaxAn[AnType="selectGoodsProto"] .quantity .input').attr("value",zhi-1);
		}else{
			return false;
		}
	}else{
		$('.MaxAn[AnType="selectGoodsProto"] .quantity .input').attr("value",1);
	}
});
$('.MaxAn[AnType="selectGoodsProto"] .quantity .add').click(function(){
	var zhi = parseInt($('.MaxAn[AnType="selectGoodsProto"] .quantity .input').val());
	if(An.const.positiveInteger_regular.test(zhi)){
		if(zhi<1){
			$('.MaxAn[AnType="selectGoodsProto"] .quantity .input').attr("value",1);
		}else{
			$('.MaxAn[AnType="selectGoodsProto"] .quantity .input').attr("value",zhi+1);
		}
	}else{
		$('.MaxAn[AnType="selectGoodsProto"] .quantity .input').attr("value",1);
	}
});

// 控制选中变色
$('.MaxAn[AnType="selectGoodsProto"] .proto .bodyMax').on("click",function(e){
	$(e.target).attr("select",true).siblings().removeAttr("select",true);
});

// 

$('.MaxAn[AnType="blackBG"]').click(function(){
	An.main.ctrlBlackBG ();
	An.main.ctrlSelectInfo();
});


// paticularPage 需要请求的信息
var particular_json={
	"banner_json":[
	{
		"add":"./static/image/detail/5b2b473bN7d85e5d8.jpg",
	},
	{
		"add":"./static/image/detail/5b2b473bNc25e80b5.jpg",
	},
	{
		"add":"./static/image/detail/5b2b473bNd9aeb584.jpg",
	},
	{
		"add":"./static/image/detail/5b2b473cN99ee624c.jpg",
	},
	{
		"add":"./static/image/detail/5b2b473cN7687017d.jpg",
	}
	],
	"shopInfo":{
		"shopName":"九阳专卖店",
		"shopId":"001121212",
		"shopImg":"./static/image/shopHeadImg/170727_8h6dckde611bcehib9jf167259798_1000x1000.jpg",
		"salePerMon":"25300",
		"collect":"15422",
		"descript":"9.0",
		"quality":"9.4",
	},
	"imgDetails":[
		"./static/image/partiPageImgs/180615_8f91dc0je8jf0d8658l86gidfa7il_750x1150.jpg",
		"./static/image/partiPageImgs/180615_52ia4bkllk7lfc5ki1443gae36dk6_750x1071.jpg",
		"./static/image/partiPageImgs/180615_4306l3fa0k9h028ll0e3iikf26581_750x834.jpg",
		"./static/image/partiPageImgs/180720_782cbg09eh9gfjcagelagf63f1lha_750x1160.jpg"
	],
	"evalutes":{
		"evaQuality":"105",
		"barDetauls":[
			"质量不错",
			"多半好评",
			"多半好评X1",
			"稳定中评",
			"什么鬼",
			"性价比高"
		],
		"evalute":[
			{
				"userName":"k1",
				"userImg":"./static/image/headImg/1.jpg",
				"userId":"0100010002",
				"evaTxt":"样式很好，漂亮",
				"userUpImg":[
					"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
					"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
					"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg"
				]
			},
			{
				"userName":"大熊猫",
				"userImg":"./static/image/headImg/1.jpg",
				"userId":"0100010002",
				"evaTxt":"样式很好，漂亮X3333",
				"userUpImg":[
					"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
					"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg",
					"./static/image/thumbnail/180615_5kc7iekcdf429729j21160fkjcj48_800x800.jpg_220x330.jpg"
				]
			}
		]
	}


} 



    //请求信息
    