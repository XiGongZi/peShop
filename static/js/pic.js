var xiao_json=[{
		"imgName":"1 (1).jpg",
		"tab":"生鲜",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"1 (2).jpg",
		"tab":"棉纺",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"1 (3).jpg",
		"tab":"优惠券",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"1 (4).jpg",
		"tab":"唯品会",
		"href":"http://www.baidu.com"
	},
	{
		"imgName":"1 (5).jpg",
		"tab":"超市",
		"href":"http://www.baidu.com"
	}];


$(".MaxAn[AnType='picShow']").html('<div><img src="" alt=""></div><div><img src="" alt=""></div><div><img src="" alt=""></div><div><img src="" alt=""></div><div><img src="" alt=""></div>');
sa(xiao_json);
function sa(xiao_json){

        	$(".MaxAn[AnType='picShow']>div").each(function(i){
        		console.log(i);
        		$(this).attr("AnUrl",xiao_json[i].href);//添加跳转地址
        		$(this).find("img").attr("src","./static/pic/"+xiao_json[i].imgName);
    		});	
}


 function getBirthdayFromIdCard(idCard) {  
        var birthday = "";  
        if(idCard != null && idCard != ""){  
            if(idCard.length == 15){  
                birthday = "19"+idCard.substr(6,6);  
            } else if(idCard.length == 18){  
                birthday = idCard.substr(6,8);  
            }  
          
            birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");  
        }  
          
        return birthday;  
      },



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
				"href":"http://www.baidu.com"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"http://www.baidu.com"
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
				"href":"http://www.baidu.com"
			},
			{
				"state_code":"1",
				"imgName":"2b006dc8-90fb-4b80-a7d8-e5048de6f5bf.jpg",
				"imgName2":"null",
				"supHead":"三好学生",
				"subHead":"00后学习装备",
				"href":"http://www.baidu.com"
			}]
		},
			
		];