
$.namespace("An.Public");
An.Public=function(){
  var inputA,inputB,inputs,regulars,input,element,a,b;
    return {
      setLineHeight:function(a){//使文字高与父级等高（居中）
        $(a).css("line-height",$(a).parent().height()+"px");
      },
      setLineHeightSelf:function(a){//使文字高与父父级等高（居中）
        $(a).css("line-height",$(a).height()+"px");
      },
      setDivHeight:function(a){//使div垂直居中
        var zhi1=$(a).parent().height();
        var zhi2=$(a).height();
        var zhi=(zhi1-zhi2)/2;
        // console.log(a+"---"+zhi);
        $(a).css("margin-top",zhi+"px");
      },
      setDivWidth:function (a){//使div横向居中
        var zhi1=$(a).parent().width();
        var zhi2=$(a).width();
        var zhi=(zhi1-zhi2)/2;
        $(a).css("margin-left",zhi+"px");
      },
      setDivMarginLeft:function(a){//使用aginleft居中
        var zhi1=$(window).width();
        var zhi2=$(a).width();
        $(a).css("margin-left",(zhi1-zhi2)/2 + "px");
       },
      checkSameInput:function (inputA,inputB){//检查两个input是否重复（非空），重复则返回true，否则返回false
        if(
          $(inputA).val()==$(inputB).val()&&
          An.Public.checkInputText2(inputA,inputB)
        ){
          return(true);
        }else{
          return(false);
        }
      },
      checkInputText2 :function (inputA,inputB){//检查两个input是否同时不为空，是则返回true，否则返回false。
        if(
           $(inputA).val()!="" &&
           $(inputB).val()!=""
           ){
          return(true);
        }else{
          return(false);
        }
      },
      checkInputText1:function (input){//检查input是否不为空，不为空则返回true，否则返回false
        if(
             $(input).val()!=""
             ){
            return(true);
          }else{
            return(false);
          }
      },
      addSubmit :function  (inputs,regulars,element){//检查inputs和regulars匹配，并在指定位置上决定是否添加submit类。
        if(An.Public.checkInputsRegular (inputs,regulars)){
          $(element).attr("class","Submit");
        }else{
          $(element).removeAttr("class","Submit");
        }
      },
      checkInputsRegular :function (inputs,regulars){//检测inputs数组与对应的正则数组，都对应则返回true，否则返回false
        var CIR=new Array();
        $(inputs).each(function(i){
          if(
              $(inputs[i]).val() == ""
            ){
            CIR.push(false);
          }else{
            if(
                regulars[i].test($(inputs[i]).val())
              ){
            CIR.push(true);
            }else{
            CIR.push(false);
            }
          }
        });
        return An.Public.CCC(CIR);
      },
      CCC:function(a){//全部为真时返回真，否则返回假    every函数,给定条件去筛选
        var isAllTrue = a.every(function(cur){return cur});
        return isAllTrue;
      },
      resetLeftPlace:function (a,b){//获取a的左边距，并赋给b
        $(b).css("margin-left",parseInt($(a).position().left)+"px");
      },
      logRegTipsCheck2 :function (inputs,regulars){//回调一个数组，按序为各个inputs与正则的匹配结果
        var TipsCheck=new Array();
        $(inputs).each(function(i){
          if(
              $(inputs[i]).val() == ""
            ){
          }else{
            if(
                regulars[i].test($(inputs[i]).val())
              ){
            TipsCheck.push(i+"isTrue");
            }else{
            TipsCheck.push(i+"isFalse");
            }
          }
        });
        return TipsCheck;
      },
      numToCZH:function (a){// 星期几数字转汉字
        switch(a){
          case 1:
            return "一";
            break;
          case 2:
            return "二";
            break;
          case 3:
            return "三";
            break;
          case 4:
            return "四";
            break;
          case 5:
            return "五";
            break;
          case 6:
            return "六";
            break;
          case 0:
            return "日";
            break;
          default:
          break;
        }
      },
      callBackDate:function (a) {
        a = a+1;
       var mydate = new Date();
       var oneday = 1000 * 60 * 60 * 24;
       var newDate = new Date(mydate - (-(a - 1) * oneday));
       var thisYear = newDate.getFullYear(); // 获取当前年份(2位)
       var thisMonth = newDate.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
       var today = newDate.getDate(); // 获取当前日(1-31)
       var thisWeek = newDate.getDay() ; // 获取当前星期X(0-6,0代表星期天)
       var thisMonth = thisMonth < 10 ? "0" + thisMonth : thisMonth;
       var thisDay = today < 10 ? "0" + today : today;
       var dateArray = new Array(thisYear, thisMonth, thisDay, thisWeek);
       return (dateArray);
     },
      getBrowserInfo:function (){//查询浏览器类型
        var ua = navigator.userAgent.toLocaleLowerCase();
        var browserType=null;
        if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
            browserType = "IE";
            browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
        } else if (ua.match(/firefox/) != null) {
            browserType = "火狐";
        }else if (ua.match(/ubrowser/) != null) {
            browserType = "UC";
        }else if (ua.match(/opera/) != null) {
            browserType = "欧朋";
        } else if (ua.match(/bidubrowser/) != null) {
            browserType = "百度";
        }else if (ua.match(/metasr/) != null) {
            browserType = "搜狗";
        }else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
            browserType = "QQ";
        }else if (ua.match(/maxthon/) != null) {
            browserType = "遨游";
        }else if (ua.match(/chrome/) != null) {
                browserType = 'chrome';
        }else if (ua.match(/safari/) != null) {
            browserType = "Safari";
        }
        return browserType;
      },
      setBCenterOfA:function (a,b){//设置b高度居中a
        var zhi1=$(a).offset().top;
        var zhi2=$(a).height();
        var zhi3=$(b).offset().top;
        var zhi4=$(b).height();
        $(b).css("top",(zhi1+zhi2/2)-(zhi4/2)+"px");
      },
      ForInSetCenter:function(a){
        //0:setDivHeight
        //1:setDivWidth
        //2:setDivWidthParent
        //3:setLineHeight
        //4:setLineHeightSelf
        //5:setMarginLeft
        $.each(a[0],function(i,n){
          An.Public.setDivHeight(n);
        });
        $.each(a[1],function(i,n){
          An.Public.setDivWidth(n);
        });
        $.each(a[2],function(i,n){
          An.Public.setDivWidthParent(n);
        });
        $.each(a[3],function(i,n){
          An.Public.setLineHeight(n);
        });
        $.each(a[4],function(i,n){
          An.Public.setLineHeightSelf(n);
        });
        $.each(a[5],function(i,n){
          An.Public.setDivMarginLeft(n);
        });
      },
      getUrlParam:function (a){//获取地址栏
        var reg = new RegExp("(^|&)"+ a +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r!=null) return unescape(r[2]); return null; //返回参数值
      },
      PayPic_Second:function (){//三秒倒计时等待
        var kk=3;
        var t1=setInterval(function(){
          kk=kk-1;
          kk<10?kk="0"+kk:kk=kk;
          console.log(kk);
          if(kk<=0){
            PayPic_Function();//结束后所执行的函数
            clearInterval(t1);
          }
        },1000);
      }
    };
}();

$.namespace("An.main");
An.main=function(){
  var goodsTitle_json;
    return {
        ctrlHei:function(){//控制enter_ten宽高
          //enter_ten
          $(".MaxAn[AnType='enter_ten']").css("height",scrWid*An.const.enter_ten__boxHei+"px");
        },
        enter_ten_HTML:function(){
          $(".MaxAn[AnType='enter_ten']").html('    <ul class="enter_ten_ul">     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>     <li>        <div>         <div><img class="enter_ten_bg" src="" alt=""></div>         <div><div class="enter_ten_word">hello world</div></div>        </div>      </li>   </ul>');

        },
        reloadHref:function(a){//点击将本元素anurl属性值填充到地址栏
          $(a).click(function(){
            window.location.href=$(this).attr("AnUrl");
          });
       },
       shoppingCartClickEve:function(){//设置购物车页 所有复选框 的点击事件
          $('label').click(function(i){
            var sta;
            sta = $(this).parent().find("input").attr("checked");//当前被点击的 状态
            // console.log(sta);
            $(this).parent().find("input").attr("checked",!sta);//设置为相反的状态
            var add;
            add=$(this).attr("name");//获取所点击的类名
            if(add == "checkEveryOne" && sta == null){//如果是 全选 按钮并且当前为false（点击后为true），全部置true
              $('.MaxAn[AnType="shoppingCart_normal_list"] .shoppingCart input').each(function(){
                $(this).attr("checked","true");
              });
            }else if(add == "checkEveryOne" && sta != null){//如果是 全选 按钮并且当前为true（点击后为false），恢复原状态
              $('.MaxAn[AnType="shoppingCart_normal_list"] .shoppingCart input').each(function(){
                var sta2;
                sta2 = $(this).parent().find("input").attr("checked");//当前被点击的 状态
                $(this).attr("checked",!sta2);
              });
            }
            if(add == "checkThis"){//点击商品时
              var b;
              b= [];
              $(this).parent().parent().parent().find(".body").each(function(i,n){//遍历当前店下所有商品勾选状态
                if($(this).find("input").attr("checked") != null){
                  b.push(true);
                }else{
                  b.push(false);
                }
              });

              if(An.Public.CCC(b)){//b数组全为true时返回true，否则返回false
                $(this).parent().parent().parent().find(".checkAll").find("input").attr("checked",true);//设置全选 选中
              }else{
                $(this).parent().parent().parent().find(".checkAll").find("input").attr("checked",false);//设置全选 非选中
              }
              // console.log($(this).parent().parent().parent().find(".body").length);
            }else if(add == "checkAll"){//点击商家时
              if(sta == null){
                $(this).parent().parent().parent().find(".body").find("input").attr("checked",true);
              }else{
                $(this).parent().parent().parent().find(".body").find("input").attr("checked",false);
              }
              
            }
              //当所有都被勾选时，全选按钮则勾选，否则取消勾选
              var all;
              all= [];
              $('.MaxAn[AnType="shoppingCart_normal_list"] input').each(function(i,n){//遍历当前店下所有商品勾选状态
                if($(this).attr("checked") != null){
                  all.push(true);
                }else{
                  all.push(false);
                }
              });
              if(An.Public.CCC(all)){
                $(".checkEveryOne input").attr("checked",true);
              }else{
                $(".checkEveryOne input").attr("checked",false);
              }
              
              //设置总价
              
              var total_json = An.main.calcAllPrice(An.main.returnEveryInputStatus());
              $(".MaxAn[AnType='foot_settle'] .toCheckAll").html('全选  数量（'+total_json.quantity+'） <b style="color:red">$'+total_json.total+'</b>');
          });
       },
       reloadAdd:function (){
          An.main.reloadHref(".MaxAn[AnType='enter_ten'] ul li");
          An.main.reloadHref("svg");
          An.main.reloadHref(".enter");
          An.main.reloadHref('.MaxAn[AnType="goodsListMain"]>div');
          An.main.reloadHref('.MaxAn[AnType="goodsList"] .goods .goodsList');
          An.main.reloadHref('.MaxAn[AnType="button_border"]');
          An.main.reloadHref('.MaxAn[AnType="button_little"]');
       },
      //回调购物车页所有input状态
      returnEveryInputStatus :function (){
        var staArr=[];
        $('.MaxAn[AnType="shoppingCart_normal_list"] .shoppingCart input').each(function(i){
          var obj={};//新建个对象
          obj.shopCode=$(this).attr("shopCode");//开始传参数进入对象内
          obj.goodsCode=$(this).attr("goodsCode");
          obj.quantity=$(this).attr("quantity");
          obj.price=$(this).attr("price");
          obj.status=$(this).attr("checked");
          staArr.push(obj);//将对象塞进数组内
        });
        return staArr;
      // console.log(staArr);
      },
      //计算购物车页总价
      calcAllPrice:function  (json){
        var total = 0;
        var quantity = 0;
        var obj = {};
        $.each(json,function(i,n){
          if(n.goodsCode != undefined && n.status != undefined){
            quantity += 1* n.quantity;
            total+= n.quantity * n.price;
          }
        });
        obj.total = total;
        obj.quantity = quantity;
        return obj;
      },
      //点击 去结算 而生成的json
      shoppingCartSettle_json:function  (json){
        var Arr = [];
        $.each(json,function(i,n){
          var obj = {};
          if(n.goodsCode != undefined && n.status != undefined){
            obj.shopCode = n.shopCode;
            obj.goodsCode = n.goodsCode;
            obj.quantity = n.quantity;
            Arr.push(obj);
          }
        });
        return Arr;
      },
      //添加banner图
      addBanner:function (banner_json){
        $.each(banner_json,function(i,n){
          $(".slideShow>a").eq(i).html("<img src='"+n.add+"'>");
        });
      },
      innerGoods2:function (goodsTitle_json){
        $.each(goodsTitle_json,function(i,j){
          $(".goodsShow").after('<div class="MaxAn" AnType="goodsTitle" type_code="'+j.type_code+'">'+j.title+'</div>');
          $(".goodsShow").after('<div class="MaxAn" AnType="shoppingMall" type_code="'+j.type_code+'"></div>');
          $.each(j.goods,function(k,n){
            switch(n.state_code){
              case "1"://占四分之一
                $('.MaxAn[AnType="shoppingMall"][type_code="'+j.type_code+'"]').append('<div class="quarterVW" AnUrl="'+n.href+'"><div class="supHead">'+n.supHead+'</div><div class="subHead">'+n.subHead+'</div><div class="img"><img src="./static/image/'+n.imgName+'" alt=""></div></div>');
                break;
              case "2"://占二分之一
                $('.MaxAn[AnType="shoppingMall"][type_code="'+j.type_code+'"]').append('<div class="halfVW" AnUrl="'+n.href+'"><div class="supHead">—— '+n.supHead+' ——</div><div class="subHead">'+n.subHead+'</div><div class="img"><img src="./static/image/'+n.imgName+'" alt=""><img src="./static/image/'+n.imgName2+'" alt=""></div></div>');
                break;
              default:
              break;
            }
          });

        });
        An.main.reloadHref('.MaxAn[AnType="shoppingMall"]>div');
      },
      ctrlBlackBG:function (){
        var zhi = $('.MaxAn[AnType="blackBG"]').css("display");
        if(zhi == "none"){
          $('.MaxAn[AnType="blackBG"]').css({"height":$("body").height(),"display":"block"});
          $("html").css("overflow-y","hidden");
        }if(zhi == "block"){
          $('.MaxAn[AnType="blackBG"]').css("display","none");
          $("html").css("overflow-y","scroll");
        }
      },
      ctrlSelectInfo:function (){
        var zhi = $('.MaxAn[AnType="selectInfo"]').css("display");
        if(zhi == "none"){
          $('.MaxAn[AnType="selectInfo"]').show({"duration":200,"easing":"easeOutSine"});
        }if(zhi == "block"){
          $('.MaxAn[AnType="selectInfo"]').css("display","none");
        }
      }
      
    };
}();

//自适应代码区开始
var setDivCenterArray=[
[//0:setDivHeight
'.MaxAn[AnType="enter_ten"]>ul>li>div',
'.MaxAn[AnType="enter_ten"]>ul>li>div>div:nth-child(2)>div',
".MaxAn[AnType='enter_ten'] ul .enter_ten_bg",
'.MaxAn[AnType="topNav"] .list svg',
'.MaxAn[AnType="topNav"] .message svg',
'.MaxAn[AnType="topNav"] .search>div',
'.MaxAn[AnType="topNav"] .search .logo .icon',
'.MaxAn[AnType="selectPrice"] .autoSelect>li input',
'.MaxAn[AnType="tips_normal"] .img svg',
'.MaxAn[AnType="shoppingCart_normal_list"] .checkThis>*',
'.MaxAn[AnType="foot_settle"] span',
'.MaxAn[AnType="foot_settle"] .button',
'.MaxAn[AnType="foot_settle"] .toCheckAll',
'.MaxAn[AnType="foot_particulars"] svg',
'.MaxAn[AnType="foot_particulars"] span',
'.MaxAn[AnType="foot_particulars"] .button',
'.MaxAn[AnType="foot_particulars"] .toCheckAll',
'.MaxAn[AnType="detailPage"] h1 .follow',
'.MaxAn[AnType="selectPrice"] .select .confirm',
'.MaxAn[AnType="user_function"]>div  svg',
'.MaxAn[AnType="user_PersonalInfo"] .title>div',
'.MaxAn[AnType="evaluate"] .title .evaName svg',
'.MaxAn[AnType="parti_shopInfo"] .title .headImg>div'
],[//1:setDivWidth
'.MaxAn[AnType="enter_ten"]>ul>li>div>div:nth-child(2)>div',
".MaxAn[AnType='enter_ten'] ul .enter_ten_bg",
'.MaxAn[AnType="topNav"] .list svg',
'.MaxAn[AnType="topNav"] .message svg',
'.MaxAn[AnType="topNav"] .search .logo .icon',
'.MaxAn[AnType="foot_particulars"] svg',
'.MaxAn[AnType="goodsList"] .theSecList .goods .goodsList>div',
'.MaxAn[AnType="goodsList"] .theSecList .goods .goodsList>div *',
'.MaxAn[AnType="goodsListMain"] .goods>*',
'.MaxAn[AnType="loginInputs"]',
'.MaxAn[AnType="tips_normal"] .img svg',
'.MaxAn[AnType="user_function"]>div svg',
'.MaxAn[AnType="user_PersonalInfo"] .title>div'
],[//2:setDivWidthParent
],[//3:setLineHeight
'.MaxAn[AnType="selectPrice"] .select>li',
'.MaxAn[AnType="selectPrice"] .autoSelect>li',
'.MaxAn[AnType="topNav"][styletype="secondary"] .title',
'.MaxAn[AnType="loginInputs"]>div .title',
'.MaxAn[AnType="user_function"]>div .name',

// '.MaxAn[AnType="selectPrice"] .select .confirm'
],[//4:setLineHeightSelf
'.MaxAn[AnType="user_PersonalInfo"] .body .name',
'.MaxAn[AnType="parti_shopInfo"] .body .moreInfo .moreInfoUp',
],[//5:setDivMarginLeft
]
];

//自适应代码区结束