var sevenTimesJQFor = [ 1, 1, 1, 1, 1, 1, 1 ];
function setLineHeight(lineElement) {
	$(lineElement).css("line-height", $(lineElement).parent().height() + "px");
}
function setLineHeightSelf(lineElement) {
	$(lineElement).css("line-height", $(lineElement).height() + "px");
}
function setDivHeight(divHeight) {
	var zhi1 = $(divHeight).parent().height();
	var zhi2 = $(divHeight).height();
	var zhi = (zhi1 - zhi2) / 2;
	$(divHeight).css("margin-top", zhi + "px");
}
function setDivWidth(divWidth) {
	var zhi1 = $(divWidth).parent().width();
	var zhi2 = $(divWidth).width();
	var zhi = (zhi1 - zhi2) / 2;
	$(divWidth).css("margin-left", zhi + "px");
}
function setDivWidthParent(divWidth) {
	var zhi1 = $(divWidth).parent().parent().width();
	var zhi2 = $(divWidth).width();
	var zhi = (zhi1 - zhi2) / 2;
	$(divWidth).css("margin-left", zhi + "px");
}

function setDivMarginLeft(mar) {
	var zhi1 = $(mar).parent().width();
	var zhi2 = $(mar).width();
	$(mar).css("margin-left", (zhi1 - zhi2) / 2 + "px")
}
function checkSameInput(inputA, inputB) {

	if ($(inputA).val() == $(inputB).val() && checkInputText2(inputA, inputB)) {
		return (true);
	} else {
		return (false);
	}
}
function showSymbol(input, symbolSpan, regular, inputs, tk) {
	var KST = true;
	if (tk) {
		if (checkSameInput(inputs[1], inputs[2])) {
			// console.log("OJBK");
			KST = true;
		} else {
			KST = false;
		}
	}
	if (checkInputText1(input) == false) {
		$(symbolSpan).removeAttr("class");
	} else {
		if (regular.test($(input).val()) && KST) {
			$(symbolSpan).attr("class", "symbol_GreenRight");
		} else {
			$(symbolSpan).attr("class", "symbol_RedWrong");
		}
	}
}
function checkInputText1(input) {
	if ($(input).val() != "") {
		return (true);
	} else {
		return (false);
	}
}

function checkInputText2(inputA, inputB) {
	if ($(inputA).val() != "" && $(inputB).val() != "") {
		return (true);
	} else {
		return (false);
	}

}
function addSubmit(inputA, inputB, element, attribute, attrValue) {
	if (checkInputText2(inputA, inputB)) {
		$(element).attr(attribute, attrValue);
	} else if (checkId(element)) {
		$(element).removeAttr(attribute);
	} else {
		return;
	}
}
function checkInputsRegular(inputs, regulars) {
	var CIR = new Array();
	$(inputs).each(function(i) {
		if ($(inputs[i]).val() == "") {
			CIR.push(false);
		} else {
			if (regulars[i].test($(inputs[i]).val())) {
				CIR.push(true);
			} else {
				CIR.push(false);
			}
		}
	});
	return CCC(CIR);
}
function CCC(CIR) {
	var isAllTrue = CIR.every(function(cur) {
		return cur
	});
	return isAllTrue;
}

function setHighLight(submit, inputs, regulars, tk) {

	var CST = true;
	if (tk) {
		if (checkSameInput(inputs[1], inputs[2])) {
			CST = true;
		} else {
			CST = false;
		}
	}
	if (

	checkInputsRegular(inputs, regulars) && CST) {
		//console.log("setHighLightOk");
		$(submit).attr("id", "submit");
	} else {
		 // console.log("setHighLightBaKa");
		//$(submit).removeAttr("id");
	}
}
function checkId(element) {
	if ($(element).attr("id") != null) {
		return (true);

	} else {
		return (false);
	}
}
function checkClass(element) {
	if ($(element).attr("class") != null) {
		return (true);

	} else {
		return (false);
	}
}

function resetLeftPlace(a, b) {
	$(b).css("margin-left", parseInt($(a).position().left) + "px");
}

//180611 update  取消add页面位置   
//callback:  前后台调用，false为前台调用，true为自定义调用   
//inputs and regulars :  当callback为false时，指所针对的input与对应的正则，都为数组。当callback为true时为字符串
//若为自定义调用则只需要传一个参数。若使用默认则需要传两个数组

function logRegTips(inputs,callBack,regulars){
	removeLogRegTips();
	var textArr=new Array();
	
	if(callBack==false){
	      textArr = logRegTipsCheck2(inputs, regulars);
	      $(textArr).each(function(i,n){
	          switch (n) {
	          case "3isFalse":
	              $(".tipsIdName b").html("姓名为二到五位汉字！");
	              break;
	          case "4isFalse":
	              $(".tipsIdNumber b").html("请输入正确的身份证号码！");
	              break;
	          case "0isFalse":
	              $(".tipsPhoneNumber b").html("请输入正确的手机号！");
	              break;
	          case "1isFalse":
	              $(".tipsPassword b").html("密码格式为6到16位数字字母下划线！");
	              break;
	          case "2isFalse":
	              $(".tipsRepassword b").html("密码不一致！");
	              break;
	          default:
	              break;
	          }
	      });
	} else if(callBack==true){//此处为系统回调时提示的信息
		switch (inputs) {//inputs为字符串，在case里加       $(".tipsRePassword b").html("密码不一致！");   即可
	      case "error_log":
	    	  $(".tipsPhoneNumber b").html("手机号或密码不正确！");
	        break;
	      	case "error_reg_we":
	        	$(".tipsPhoneNumber b").html("非法绑定禁止操作！");
	            break;
	        case "error_reg_phone":
	        	$(".tipsPhoneNumber b").html("手机号格式不正确！");
	            break;
	        case "error_reg_pwd":
	        	$(".tipsPassword b").html("密码格式不正确！");
	            break;
	        case "error_reg_con_pwd":
	        	$(".tipsRepassword b").html("两次输入的密码不匹配！");
	            break;
	        case "error_reg_name":
	        	$(".tipsIdName b").html("用户名格式不正确，请输入中文！");
	            break;
	        case "error_reg_number":
	        	$(".tipsIdNumber b").html("身份证号码格式不正确！");
	            break;
	        case "error_reg_already_phone":
	        	$(".tipsPhoneNumber b").html("已经存在该手机号格！");
	            break;
	        case "error_reg_already_papers":
	        	$(".tipsIdNumber b").html("已经存在该身份证号码！");
	            break;
	        case "error_add_already_papers":
	        	$(".tipsIdNumber b").html("禁止添加已经存在的身份证号码！");
	            break;
	        case "Register_Bind":
	            break;
	        default:
	            break;
	        }
	}                             
}

function removeLogRegTips(){
	  $(".tipsIdName>b").html("");
	  $(".tipsIdNumber>b").html("");
	  $(".tipsPhoneNumber>b").html("");
	  $(".tipspassword>b").html("");
	  $(".tipsRepassword>b").html("");
	}

function logRegTipsCheck2(inputs, regulars) {
	var TipsCheck = new Array();

	$(inputs).each(function(i) {
		if ($(inputs[i]).val() == "") {
		} else {
			if (regulars[i].test($(inputs[i]).val())) {
				TipsCheck.push(i + "isTrue");
				// console.log(TipsCheck);
			} else {
				TipsCheck.push(i + "isFalse");
				// console.log(TipsCheck);
			}
		}
	});
	return TipsCheck;
}
function tabList(){
    // 列表选中时背景色
var firstListDivBGFocus = "#fff";
  // 列表未选中时背景色
var firstListDivBGBlur = "#f2f2f2";
  // 列表选中时字色
var firstListDivFGFocus = "#333";
  // 列表未选中时字色
var firstListDivFGBlur = "#888";

//默认设置（第一个）
  $(".MaxAn .officeList .secondList>div").eq(0).css("display","block");
  $(".MaxAn .officeList .firstList>div").eq(0).css({"width":"100.1%","color":firstListDivFGFocus,"background":firstListDivBGFocus,"border-left":"4px solid #26ad9c"});
  
  $(".MaxAn .officeList .firstList >div").click(function(){
    console.log(1);
    //清除所有
    $(".MaxAn .officeList .secondList>div").css("display","none");
    $(".MaxAn .officeList .firstList>div").css({"width":"100%","background":firstListDivBGBlur,"color":firstListDivFGBlur,"border-left":"0"});
    $(".MaxAn .officeList .secondList>div").eq($(this).index()).css("display","block");
    $(this).css({"width":"100.1%","background":firstListDivBGFocus,"color":firstListDivFGFocus,"border-left":"4px solid #26ad9c"});
  });
}
function topNavClick(thisKey){
  $(".topNavList>div").css("display","none");
  $(".topNavList>div").eq(thisKey).css("display","block");
}
function topNavClick(thisKey) {
	$(".topNavList>div").css("display", "none");
	$(".topNavList>div").eq(thisKey).css("display", "block");
}
// callBackDate(1)
function numToCZH(num) {
	switch (num) {
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
	case 7:
		return "日";
		break;
	default:
		break;
	}
}
function numToMornNoon(num) {
	switch (num) {
	case 1:
		return "上午";
		break;
	case 2:
		return "下午";
		break;
	case 3:
		return "上半夜";
		break;
	case 4:
		return "下半夜";
		break;
	default:
		break;
	}
}
function callBackDate(dateK) {
	var mydate = new Date();
	var oneday = 1000 * 60 * 60 * 24;
	var newDate = new Date(mydate - (-(dateK - 1) * oneday));
	var thisYear = newDate.getFullYear(); // 获取当前年份(2位)
	var thisMonth = newDate.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
	var today = newDate.getDate(); // 获取当前日(1-31)
	var thisWeek = newDate.getDay()+1 ; // 获取当前星期X(0-6,0代表星期天)
	var thisMonth = thisMonth < 10 ? "0" + thisMonth : thisMonth;
	var thisDay = today < 10 ? "0" + today : today;
	var dateArray = new Array(thisYear, thisMonth, thisDay, thisWeek);
	return (dateArray);
}
function dateBanner() {
	$(".moreDateWeek").html("");
	$.each(sevenTimesJQFor, function(i, n) {
		$(".moreDateWeek").append(
				"<div>" + numToCZH(callBackDate(i)[3]) + "</div>");
	});
	$(".moreDateDate").html("");
	$.each(sevenTimesJQFor, function(i, n) {
		$(".moreDateDate").append("<div>" + callBackDate(i + 1)[2] + "</div>");
	});
	setLineHeight(".moreDateWeek>div");
	setLineHeightSelf(".moreDateDate>div");
}

function setCardDivCenter(){
	  setLineHeight(".doctorInformation .otherInformation .nameAndPrice .name>div:nth-child(1)");
	  setDivHeight(".doctorInformation .otherInformation .nameAndPrice .price img");
	  $(".doctorInformation .otherInformation .nameAndPrice .name>div:nth-child(2)").css("margin-top",
	  ($(".doctorInformation .otherInformation .nameAndPrice .name>div:nth-child(2)").parent().height())*.3+"px"
	);
	  setDivHeight(".doctorInformation .otherInformation .nameAndPrice");
	  setDivHeight(".doctorInformation .headImg>img");
	  setDivWidth(".doctorInformation .headImg>img");
	    setDivHeight(".MaxAn[AnIndex='dateAndPrice'] .headImg img");
	    setDivWidth(".MaxAn[AnIndex='dateAndPrice'] .headImg img");
	        setDivHeight(".MaxAn[warn='NotFoundInformation'] img");
	    setDivHeight(".MaxAn[warn='NotFoundInformation'] .nameAndPrice");
	    setLineHeight(".MaxAn[warn='NotFoundInformation'] .nameAndPrice div");
	    setDivWidth(".MaxAn[warn='NotFoundInformation'] img");
	}

// 添加医生卡片
/*
 * function appendCards(add, doctorName, doctorTitle, doctorImage, markUpA) {
 * $(add) .append( '<a href=' + markUpA + '><div class="doctorCardMax"
 * test="doctorCard"><div><div class="doctorInformation" AnDetails="a"><div
 * class="headImg"><img src="' + doctorImage + '" alt=""></div><div
 * class="otherInformation"><div class="nameAndPrice"><div class="name"><div>' +
 * doctorName + '</div><div>' + doctorTitle + '</div></div><div
 * class="price"><img src="static/image/rightRow.png" alt=""></div></div></div></div></div></div></a>'); }
 */

function appendCards(add,doctorName,doctorTitle,doctorImage,markUpA,test,id){
	  $(add).append('<a href='+markUpA+' test='+test+' id='+id+' ><div class="doctorCardMax" test="doctorCard"><div><div class="doctorInformation" AnDetails="a"><div class="headImg"><img src="'+doctorImage+'" alt=""></div><div class="otherInformation"><div class="nameAndPrice"><div class="name"><div class="doctorName1">'+doctorName+'</div><div class="doctorName2">'+doctorTitle+'</div></div><div class="price"><img src="static/image/rightRow.png" alt=""></div></div></div></div></div></div></a>');
}

// 医大四 免刷新自适应 start
$(window).resize(
		function() {
			scrWid = $(window).width();
			$(".MaxAn").css("width", scrWid + "px");
			var listHeight = parseInt($(".officeList").height())
					- parseInt($(".officeList .fontNav").height());
			$(".officeList .firstList").css("height", listHeight + "px");
			$(".officeList .secondList").css("height", listHeight + "px");
			tabList();
			// 重置左边距
			$('.MaxAn[test="PayPic"]').css("height",$(document).height());
			$('.MaxAn[test="selectTime"]').height($(document).height());
			$(".MaxAn[warn='familyInputs']").css("height",$(document).height());
			
			resetLeftPlace(".topNav>div:eq(0)", ".assistant");
			resetLeftPlace(".topNav>div:eq(1)", ".personel");
			resetLeftPlace(".topNav>div:eq(2)", ".hospital");

	$(".officeList").css("height",parseInt($(window).height()-235)+"px");
			ForInSetCenter(setDivCenterArray);
		});
// 医大四 免刷新自适应 over
// 判断浏览器类型
function getBrowserInfo() {
	var ua = navigator.userAgent.toLocaleLowerCase();
	var browserType = null;
	if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
		browserType = "IE";
		browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua
				.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
	} else if (ua.match(/firefox/) != null) {
		browserType = "火狐";
	} else if (ua.match(/ubrowser/) != null) {
		browserType = "UC";
	} else if (ua.match(/opera/) != null) {
		browserType = "欧朋";
	} else if (ua.match(/bidubrowser/) != null) {
		browserType = "百度";
	} else if (ua.match(/metasr/) != null) {
		browserType = "搜狗";
	} else if (ua.match(/tencenttraveler/) != null
			|| ua.match(/qqbrowse/) != null) {
		browserType = "QQ";
	} else if (ua.match(/maxthon/) != null) {
		browserType = "遨游";
	} else if (ua.match(/chrome/) != null) {
		browserType = 'chrome';
	} else if (ua.match(/safari/) != null) {
		browserType = "Safari";
	}
	return browserType;
}

function appendDateCard(add, mornNoon, price, test, id) {
	$(".MaxAn[AnIndex='dateAndPrice']").append(
			'<a href="' + add + '" test=' + test + ' id=' + id
					+ '><div class="DAPMax"><div><div>' + mornNoon
					+ '</div></div><div><div class="price">' + price
					+ '</div></div></div></a>');
}
function judgeHaoyuanNum(k) {
	return (k < 1 ? false : true);
}
function setDoctorInformationCard(JSonArray_DoctorInformation) {
	$(".MaxAn[AnIndex='dateAndPrice']").html("");
	var See_dateArray = new Array();
	var totalfeeArray = new Array();
	var haoyuanArray = new Array();
	var idArray = new Array();
	var See_dateNoUniqueArray = new Array();
	var doctCodeArray = new Array();
	var noon_codeArray = new Array();
	$.each(JSonArray_DoctorInformation, function(i, n) {
		$("#doctName").text(JSonArray_DoctorInformation[i].doct_name);
		$("#reglevlName").text(JSonArray_DoctorInformation[i].reglevl_name);
		See_dateArray.push(JSonArray_DoctorInformation[i].see_date);
		totalfeeArray.push(JSonArray_DoctorInformation[i].totalfee);
		haoyuanArray.push(JSonArray_DoctorInformation[i].haoyuan);
		idArray.push(JSonArray_DoctorInformation[i].id);
		See_dateNoUniqueArray.push(JSonArray_DoctorInformation[i].see_date);
		doctCodeArray.push(JSonArray_DoctorInformation[i].doct_code);
		noon_codeArray.push(JSonArray_DoctorInformation[i].noon_code);
	});
	$.unique(See_dateArray);// 去重
	var AfterWeekArray = See_dateArray;
	$(".moreDate .moreDateDate div").css("cursor", "default");
	var newTimeArray = new Array();
	$.each(sevenTimesJQFor, function(i, n) {
		var py = callBackDate(i + 1)[0] + callBackDate(i + 1)[1]
				+ callBackDate(i + 1)[2];
		newTimeArray.push(py);
	});
	$(".moreDateDate div").attr("test", "setCheck");// 设置所有为禁选状态
	var sevenMornNoonArray = new Array();
	$.each(noon_codeArray, function(i) {
		sevenMornNoonArray.push(numToMornNoon(parseInt(noon_codeArray[i])));
	});// 将午别代码转码为汉字
	$.each(totalfeeArray, function(i) {
		appendDateCard("doctor.jsp?id=" + idArray[i] + "&doctCode="
				+ doctCodeArray[i], sevenMornNoonArray[i], "￥"
				+ totalfeeArray[i], See_dateNoUniqueArray[i], idArray[i]);// 加载每天的就诊卡
		setDivHeight(".DAPMax>div");
		setLineHeightSelf(".DAPMax>div:nth-child(1)>div");
		setLineHeightSelf(".DAPMax>div:nth-child(2)>div");

		if (judgeHaoyuanNum(haoyuanArray[i])) {
			$(".DAPMax").eq(i).removeAttr("test", "SetDisabled");
		} else {
			$(".DAPMax").eq(i).attr("test", "SetDisabled");
			$(".MaxAn[AnIndex='dateAndPrice'] a").eq(i).removeAttr("href");
			$(".DAPMax").eq(i).find('.price').html("已挂满");
		}// 判断是否有号

	});

	$.each(newTimeArray, function(i) {
		if (AfterWeekArray[0] == newTimeArray[i]) {
			$(".moreDateDate div").removeClass();
			$(".moreDateDate div").eq(i).attr("class", "dateFocus");
			var nnn = callBackDate(i + 1);
			$(".todayDate>div").html(
					"挂号日期 " + nnn[0] + "-" + nnn[1] + "-" + nnn[2]);
			$(".MaxAn[AnIndex='dateAndPrice'] a").hide();
			$(
					".MaxAn[AnIndex='dateAndPrice'] a[test=" + nnn[0] + nnn[1]
							+ nnn[2] + "]").show();
		}
	});
	$.each(newTimeArray, function(i, n) {
		$.each(AfterWeekArray, function(j, l) {
			if (newTimeArray[i] == AfterWeekArray[j]) {// 用已经限定的范围去加数据
				$(".moreDateDate div").eq(i).css("cursor", "pointer");
				$(".moreDateDate div").eq(i).removeAttr("test");
				$(".moreDateDate div").eq(i).click(
						function(j) {
							$(".moreDateDate div").removeClass("dateFocus");
							$(this).attr("class", "dateFocus");
							var nnn = callBackDate($(this).index() + 1);
							$(".todayDate>div").html(
									"挂号日期 " + nnn[0] + "-" + nnn[1] + "-"
											+ nnn[2]);
							$(".MaxAn[AnIndex='dateAndPrice'] a").hide();
							$(
									".MaxAn[AnIndex='dateAndPrice'] a[test="
											+ nnn[0] + nnn[1] + nnn[2] + "]")
									.show();
						});
			}
		});
	});
}
// select member
// selectFamilyMemberOption(JSonArray_FamilyMembers);
function selectFamilyMemberOption(JSonArray) {
	var MemberNameArray = new Array();
	var ValueArray = new Array();
	$.each(JSonArray, function(i, n) {
		MemberNameArray.push(JSonArray[i].userName);
		ValueArray.push(JSonArray[i].userId);
	});

	$(JSonArray).each(
			function(i) {
				$(".input[test='addMemberOption'] select").append(
						"<option value='" + ValueArray[i] + "'>"
								+ MemberNameArray[i] + "</option>");
			})
}
$(".input[test='addMemberOption'] select option").click(function() {
	// console.log($(this).index());
});

// pay information
function AddPayFormInformation(JSonObject) {
	var PayArray = new Array();
	PayArray.push("预约挂号");
	PayArray.push(JSonObject.dept_name);
	PayArray.push(JSonObject.doct_name);
	PayArray.push(JSonObject.totalfee);
	PayArray.push(JSonObject.totalfee);
	PayArray.push(JSonObject.see_date);
	$(PayArray).each(function(i) {
		$(".MaxAn[warn='kimi']>div .input>div").eq(i).html(this);
	});
	$(".MaxAn[warn='pay']>div  .input>div").html(PayArray[5]);
	var idCardNumber = $(".MaxAn[warn='kimi']>div").eq(6).find(".Pay_Date")
			.html();
	$(".MaxAn[warn='kimi']>div").eq(6).find(".Pay_Date").html(
			(idCardNumber.substring(0, 4)) + "-"
					+ (idCardNumber.substring(4, 6)) + "-"
					+ (idCardNumber.substring(6, 8)));
}
// 加星号
// addAsterisk ()
function addAsterisk() {
	var idCardNumber = $(".MaxAn[test='patientIDCardDetail']>div").eq(1).find(
			".patientIDCardDetailValue").html();
	var phoneNumber = $(".MaxAn[test='patientIDCardDetail']>div").eq(2).find(
			".patientIDCardDetailValue").html();
	$(".MaxAn[test='patientIDCardDetail']>div").eq(1).find(
			".patientIDCardDetailValue").html(
			(idCardNumber.substring(0, 1)) + "****************"
					+ (idCardNumber.charAt(idCardNumber.length - 1)));
	$(".MaxAn[test='patientIDCardDetail']>div").eq(2).find(
			".patientIDCardDetailValue").html(
			(phoneNumber.substring(0, 3)) + "****"
					+ (phoneNumber.substring(7, 11)));
}

// addCards("div[test='doctorMax']", JSonArray_doctorCardName,
// "./doctorDetail.html");
// addCards("div[test='familyMember']", JSonArray_familyMember,
// "./familyMemberInputs.html");
// addCards("div[test='patientIDCard']", JSonArray_patientIDCard,
// "./patientIDCardDetail.html");

function addCards(add,JSonArray_DoctorInformation,addTo){
	var doc_nameArray = new Array ();
	var reglevl_nameArray = new Array ();
	var imgSrcArray = new Array();
	var doctorId = new Array();

	$.each(JSonArray_DoctorInformation,function(i,n){
	    doc_nameArray.push(JSonArray_DoctorInformation[i].doct_name);
	    reglevl_nameArray.push(JSonArray_DoctorInformation[i].reglevl_name);
	    imgSrcArray.push("static/image/114.ico");
	    doctorId.push(JSonArray_DoctorInformation[i].doctid);
	  });

	$(doc_nameArray).each(function(i){
	  appendCards(add,doc_nameArray[i],reglevl_nameArray[i],imgSrcArray[i],addTo + doctorId[i]);
	  setCardDivCenter();
	});

}

// 出诊医生
function addCardsDoctorMax(JSonArray_DoctorInformation) {
	var doc_nameArray = new Array();
	var reglevl_nameArray = new Array();
	var imgSrcArray = new Array();
	var doctorId = new Array();

	$.each(JSonArray_DoctorInformation, function(i, n) {
		doc_nameArray.push(JSonArray_DoctorInformation[i].doct_name);
		reglevl_nameArray.push(JSonArray_DoctorInformation[i].reglevl_name);
		doctorId.push(JSonArray_DoctorInformation[i].doctid);
		imgSrcArray.push("static/image/114.ico");
	});

	$(doc_nameArray).each(
			function(i) {
				appendCards("div[test='doctorMax']", doc_nameArray[i],
						reglevl_nameArray[i], imgSrcArray[i],
						"doctorWorkList.jsp?doctCode=" + doctorId[i]);
				setCardDivCenter()
			});

}

// 家庭成员
function addCardsFamilyMember(JSonArray_DoctorInformation) {
	var doc_nameArray = new Array();
	var reglevl_nameArray = new Array();
	var imgSrcArray = new Array();
	var userId = new Array();

	$.each(JSonArray_DoctorInformation, function(i, n) {
		userId.push(JSonArray_DoctorInformation[i].userId);
		doc_nameArray.push(JSonArray_DoctorInformation[i].userName);
		reglevl_nameArray.push(JSonArray_DoctorInformation[i].parentId);
		imgSrcArray.push("static/image/user.png");
	});

	$(doc_nameArray).each(
			function(i) {
				appendCards("div[test='familyMember']", doc_nameArray[i],
						(reglevl_nameArray[i] == 0) ? "本人" : "家人",
						imgSrcArray[i], "user.jsp?userId=" + userId[i]);
				setCardDivCenter()
			});

}

// 绑定就诊卡
function addCardsPatientIDCard(JSonArray_DoctorInformation) {
	var doc_nameArray = new Array();
	var reglevl_nameArray = new Array();
	var imgSrcArray = new Array();
	var userId = new Array();

	$.each(JSonArray_DoctorInformation, function(i, n) {
		userId.push(JSonArray_DoctorInformation[i].userId);
		doc_nameArray.push(JSonArray_DoctorInformation[i].userName);
		reglevl_nameArray.push(JSonArray_DoctorInformation[i].patientId);
		imgSrcArray.push("static/image/114.ico");
	});

	$(doc_nameArray).each(
			function(i) {
				appendCards("div[test='patientIDCard']", doc_nameArray[i],
						(reglevl_nameArray[i] == null) ? "暂无就诊卡号"
								: reglevl_nameArray[i], imgSrcArray[i],
						"cardBind.jsp?userId=" + userId[i]);
				setCardDivCenter();
			});
}

function setBCenterOfA(a, b) {
	var zhi1 = $(a).offset().top;
	var zhi2 = $(a).height();
	var zhi3 = $(b).offset().top;
	var zhi4 = $(b).height();
	$(b).css("top", (zhi1 + zhi2 / 2) - (zhi4 / 2) + "px")
}

var setDivCenterArray=[
[// 0:setDivHeight
".dateMax .today .todayDate",
".dateMax .today .todayMore",
'.MaxAn[test="DateOrDocNav"]>div>div',
".DAPMax>div",
" .headImg>img",
".familyMemberInputs .input select",
".familyMemberInputs[test='lastFamilyMemberInputs'] .familyMemberInputsCheckAge",
'.MaxAn[test="selectTime"] .selectTimeBG',
".selectTimeBG_body img",
'.MaxAn[test="PayPic"] .PayPic img',
'.MaxAn[warn="NotFoundInformation"] img'
],[// 1:setDivWidth
".headImg>img",
".MaxAn[test='familyMemberInputsButton'] .familyMemberInputs",
".patientIDCardDetailTips>div",
".LoginBox",
".selectTimeBG_TimeSelectDivide",
'.MaxAn[test="PayPic"] .PayPic img',
".selectTimeBG_confirm>div",
'.MaxAn[warn="NotFoundInformation"] img'
],[// 2:setDivWidthParent
"div[test='buttonGreenBg']"
],[// 3:setLineHeight
".todayDate>div",
".todayMore>div",
".moreDateWeek>div",
".familyMemberInputs .input input",
'.MaxAn[warn="kimi"] .input div',
'.MaxAn[warn="pay"] .input div',
".selectTimeBG_confirm>div",
'.MaxAn[test="DateOrDocNav"]>div>div'
],[// 4:setLineHeightSelf
".moreDateDate>div",
".DAPMax>div:nth-child(1)>div",
".DAPMax>div:nth-child(2)>div",
".patientIDCardDetail>div",
".MaxAn[test='familyMemberInputsButton'] .familyMemberInputs",
"div[test='buttonGreenBg']",
".MaxAn[warn='NotFoundInformation'] .nameAndPrice div"
],[// 5:setDivMarginLeft
".LoginBox"
]
];


function ForInSetCenter(setArray) {
	// 0:setDivHeight
	// 1:setDivWidth
	// 2:setDivWidthParent
	// 3:setLineHeight
	// 4:setLineHeightSelf
	// 5:setMarginLeft
	$.each(setArray[0], function(i, n) {
		setDivHeight(n);
	});
	$.each(setArray[1], function(i, n) {
		setDivWidth(n);
	});
	$.each(setArray[2], function(i, n) {
		setDivWidthParent(n);
	});
	$.each(setArray[3], function(i, n) {
		setLineHeight(n);
	});
	$.each(setArray[4], function(i, n) {
		setLineHeightSelf(n);
	});
	$.each(setArray[5], function(i, n) {
		setDivMarginLeft(n);
	});
}

selectTimeHourArray0 = [ 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12,
		13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ];
selectTimeHourArray1 = [ 08, 09, 10, 11 ];
selectTimeHourArray2 = [ 12, 13, 14, 15, 16 ];
selectTimeHourArray3 = [ 16, 17, 18, 19, 20, 21, 22, 23 ];
selectTimeHourArray4 = [ 00, 01, 02, 03, 04, 05, 06, 07 ];
selectTimeMinuteArray1 = [ 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13,
		14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
		32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
		50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 00 ];
selectTimeMinuteArray2 = [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
		43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ];
selectTimeMinuteArray3 = [ 00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12,
		13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 ];

function showArrayNextElement(add, array, tk, test1) {
	// 判断当前input值是第几个
	// 获取下一个并填充
	let
	zhi = parseInt($(add).val());
	let
	zhiLen = array.length;
	let
	kk = 0;
	if (tk && zhi >= 0 && zhi <= 24) {
		$.each(array, function(i, n) {
			if (zhi == n) {
				kk = i;
				return false;
			}
		})
	} else if (!tk && zhi >= 0 && zhi <= 59) {
		// let test1 = 2;
		array = JudgeHour(test1);
		zhiLen = array.length;
		$.each(array, function(i, n) {
			// console.log("Minute'n is "+n)
			if (zhi == n) {
				kk = i;
				return false;
			}
		});
	}
	if (kk <= (zhiLen - 2)) {
		var thisK = array[kk + 1] < 10 ? "0" + array[kk + 1] : array[kk + 1];
		$(add).val(thisK);
	} else {
		kk = -1;
		var thisK = array[kk + 1] < 10 ? "0" + array[kk + 1] : array[kk + 1];
		$(add).val(thisK);
	}
	// 半点重置
	if (test1 == 2) {
		if ($(".selectTimeBG_TimeSelectHour>input").val() == 16
				&& $(".selectTimeBG_TimeSelectMinute>input").val() > 29) {
			$(".selectTimeBG_TimeSelectMinute>input").val("00");
			// alert(1)
		}
	} else if (test1 == 3) {
		if ($(".selectTimeBG_TimeSelectHour>input").val() == 16
				&& $(".selectTimeBG_TimeSelectMinute>input").val() < 30) {
			$(".selectTimeBG_TimeSelectMinute>input").val("30");
			// alert(1)
		}
	}
}

function showArrayPreElement(add, array, tk, test1) {
	// 判断当前input值是第几个
	// 获取下一个并填充
	let
	zhi = parseInt($(add).val());
	let
	zhiLen = array.length;
	let
	kk = 0;
	if (tk && zhi >= 0 && zhi <= 24) {
		$.each(array, function(i, n) {
			if (zhi == n) {
				kk = i;
				return false;
			}
		});
	} else if (!tk && zhi >= 0 && zhi <= 59) {
		array = JudgeHour(test1);
		zhiLen = array.length;
		$.each(array, function(i, n) {
			if (zhi == n) {
				kk = i;
				return false;
			}
		});
	}
	if (kk > 0) {
		var thisK = array[kk - 1] < 10 ? "0" + array[kk - 1] : array[kk - 1];
		$(add).val(thisK);
	} else {
		kk = zhiLen;
		var thisK = array[kk - 1] < 10 ? "0" + array[kk - 1] : array[kk - 1];
		$(add).val(thisK);
	}
	// 半点重置
	if (test1 == 2) {
		if ($(".selectTimeBG_TimeSelectHour>input").val() == 16
				&& $(".selectTimeBG_TimeSelectMinute>input").val() > 29) {
			$(".selectTimeBG_TimeSelectMinute>input").val("00");
		}
	} else if (test1 == 3) {
		if ($(".selectTimeBG_TimeSelectHour>input").val() == 16
				&& $(".selectTimeBG_TimeSelectMinute>input").val() < 30) {
			$(".selectTimeBG_TimeSelectMinute>input").val("30");
		}
	}
}

function JudgeHour(test1) {
	let
	sasa = $(".selectTimeBG_TimeSelectHour>input").val();
	// console.log(".selectTimeBG_TimeSelectHour>input is "+sasa);
	let
	array;
	if (sasa == 16 && test1 == 2) {
		array = selectTimeMinuteArray3;
	} else if (sasa == 16 && test1 == 3) {
		array = selectTimeMinuteArray2;
	} else {
		array = selectTimeMinuteArray1;
	}
	return array;
}

function numToMornNoon_ToSetTime(num) {
	 let zhi=parseInt(num);
	  switch(zhi){
	case 0:
		$(".selectTimeBG_TimeSelectHour>input").val("00");
		$(".selectTimeBG_TimeSelectMinute>input").val("00");
		$(".Pay_TimeSelectHour").html("00  ：  00");
		$(".selectTimeBG_TimeSelectHourDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray0, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		$(".selectTimeBG_TimeSelectHourUp").click(
				function() {
					showArrayNextElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray0, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteUp").click(
				function() {
					showArrayNextElement(
							".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		// return "全天";
		break;
	case 1:
		// array[kk-1]<10?"0"+array[kk-1]:array[kk-1]
		$(".selectTimeBG_TimeSelectHour>input").val("08");
		$(".selectTimeBG_TimeSelectMinute>input").val("00");
		$(".Pay_TimeSelectHour").html("08  :  00");
		$(".selectTimeBG_TimeSelectHourDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray1, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		$(".selectTimeBG_TimeSelectHourUp").click(
				function() {
					showArrayNextElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray1, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteUp").click(
				function() {
					showArrayNextElement(
							".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});
		// return "上午";
		break;
	case 2:
		$(".selectTimeBG_TimeSelectHour>input").val("12");
		$(".selectTimeBG_TimeSelectMinute>input").val("00");
		$(".Pay_TimeSelectHour").html("12  :  00");
		$(".selectTimeBG_TimeSelectHourDown").click(
				function() {

					showArrayPreElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray2, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		$(".selectTimeBG_TimeSelectHourUp").click(
				function() {

					showArrayNextElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray2, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteUp").click(
				function() {
					showArrayNextElement(
							".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		// return "下午";
		break;
	case 3:
		$(".selectTimeBG_TimeSelectHour>input").val("16");
		$(".selectTimeBG_TimeSelectMinute>input").val("30");
		$(".Pay_TimeSelectHour").html("16  :  30");
		$(".selectTimeBG_TimeSelectHourDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray3, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		$(".selectTimeBG_TimeSelectHourUp").click(
				function() {
					showArrayNextElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray3, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteUp").click(
				function() {
					showArrayNextElement(
							".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});
		// return "晚上";
		break;
	case 4:
		$(".selectTimeBG_TimeSelectHour>input").val("00");
		$(".selectTimeBG_TimeSelectMinute>input").val("00");
		$(".Pay_TimeSelectHour").html("00  :  00");
		$(".selectTimeBG_TimeSelectHourDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray4, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteDown").click(
				function() {
					showArrayPreElement(".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});

		$(".selectTimeBG_TimeSelectHourUp").click(
				function() {
					showArrayNextElement(".selectTimeBG_TimeSelectHour>input",
							selectTimeHourArray4, true, num);
				});

		$(".selectTimeBG_TimeSelectMinuteUp").click(
				function() {
					showArrayNextElement(
							".selectTimeBG_TimeSelectMinute>input",
							selectTimeMinuteArray1, false, num);
				});
		// return "凌晨";
		break;
	default:
		break;
	}
}

$(".selectTimeBG_confirm").click(function() {
	var zhi1 = parseInt($(".selectTimeBG_TimeSelectHour>input").val());
	var zhi2 = parseInt($(".selectTimeBG_TimeSelectMinute>input").val());
	// alert(zhi1+" "+zhi2)
	// check form
	if (!isNaN(zhi1) && !isNaN(zhi2)) {
		if (zhi1 > 24 || zhi1 < 0) {
			alert("一天只有24小时哟~");
			$(".Pay_TimeSelectHour").html("请重新选择时间");
			$(".Pay_TimeSelectHour").css("color", "red");
		} else if (zhi2 > 59 || zhi2 < 0) {
			alert("一小时只有60分钟哟~");
			$(".Pay_TimeSelectHour").html("请重新选择时间");
		} else {
			zhi1 = zhi1 < 10 ? "0" + zhi1 : zhi1;
			zhi2 = zhi2 < 10 ? "0" + zhi2 : zhi2;
			$(".Pay_TimeSelectHour").html(zhi1 + "  :  " + zhi2);
			$(".Pay_TimeSelectHour").css("color", "#26ad9c");
		}
	} else {
		alert("只允许输入数字哟~")
		$(".Pay_TimeSelectHour").html("请重新选择时间");
		$(".Pay_TimeSelectHour").css("color", "red");
	}

	// $(".Pay_TimeSelectHour").html(zhi1);
	$(".Pay_TimeSelectMinute").html(zhi2);
	$(".MaxAn[test='selectTime'").hide();
});

// numToMornNoon_ToSetTime(1);

// to checkPayInformationTOrF

// function

// new function return Array for inputArray
function checkInputTexts(inputArray) {
	let
	TFArray = new Array();
	$.each(inputArray, function(i, n) {
		if (n == "") {
			TFArray[i] = false;
		} else {
			TFArray[i] = true;
		}

	});
	return TFArray;
}

// function appendPatientRecord(){
// ' <div class="familyMemberInputs"><div class="headImg"><img
// src="./image/date.png" alt=""><p>就诊日期</p> </div><div class="input"><div
// class="Pay_Date"></div></div></div>'
// }

function addPatientRecordCards (app){
	  
    // console.log("start");
    if(!app.returnFlag){
      $(".MaxAn[warn2='patientRecordWarn']").show();
      setDivWidth(".MaxAn[warn2='patientRecordWarn'] div[test='buttonGreenBg']");
    }
    $(".MaxAn[warn2='kimi']>a").remove();
    $(".MaxAn[warn2='kimi'] #userId option").remove();
    $(".MaxAn[warn2='kimi'] #userId").append('<option value="-1" disabled="disabled">选择就诊人</option>');
    // let childLength=$(".MaxAn[warn2='patientRecordWarn']").children().length;
    var Array_DoctorName_RecordCards=new Array();
    var Array_DoctorTitle_RecordCards=new Array();
    let Array_User_RecordCards=new Array();
    let Array_UserId_RecordCards=new Array();
    var Array_OrderId_RecordCards=new Array();
    var Array_statusId_RecordCards=new Array();
  $.each(app.userList,function(i,n){
    Array_User_RecordCards.push(n.userName);
    Array_UserId_RecordCards.push(n.userId);
  });
  $.each(app.orderList,function(i,n){
    Array_DoctorName_RecordCards.push(n.userName);
    Array_DoctorTitle_RecordCards.push((n.visitTime.substring(0,4))+"-"+(n.visitTime.substring(4,6))+"-"+(n.visitTime.substring(6,8)));
    Array_OrderId_RecordCards.push(n.orderId);
    Array_statusId_RecordCards.push(n.statusId);
    });
 $.each(Array_OrderId_RecordCards,function(i){
      appendCards(".MaxAn[warn2='kimi']",Array_DoctorName_RecordCards[i],Array_DoctorTitle_RecordCards[i],"static/image/record.png","order.jsp?orderId="+Array_OrderId_RecordCards[i]);
      $(".MaxAn[warn2='kimi'] a:eq("+i+") .price").html(numToPatientRecord(Array_statusId_RecordCards[i])).css({"font-size":"34px","color":"#26ad9c"});
      if(Array_statusId_RecordCards[i]==0){
      $(".MaxAn[warn2='kimi'] a:eq("+i+") .price").css("color","red");

      }else if(Array_statusId_RecordCards[i]==-1){
      $(".MaxAn[warn2='kimi'] a:eq("+i+") .price").css("color","#bababa");
      }
  });
      // date
      $(".MaxAn[warn2='kimi'] .doctorName2").css({"color":"#bababa","border-color":"#fff"});
      $("#userId").css({"color":"#26ad9c"});
      setLineHeight(".MaxAn[warn2='kimi'] .price");
 let JSonArray_PatientRecordSb1=[];
 $.each(Array_User_RecordCards,function(i){
    JSonArray_PatientRecordSb1[i]={}
    JSonArray_PatientRecordSb1[i].MemberName=Array_User_RecordCards[i];
    JSonArray_PatientRecordSb1[i].Value=Array_UserId_RecordCards[i];
 });
selectPatientRecordOption(JSonArray_PatientRecordSb1);
//console.log(JSonArray_PatientRecordSb1);
}


function selectPatientRecordOption(JSonArray) {
	let
	MemberNameArray = new Array();
	let
	ValueArray = new Array();
	$.each(JSonArray, function(i, n) {
		MemberNameArray.push(JSonArray[i].MemberName);
		ValueArray.push(JSonArray[i].Value);
	});

	$.each(MemberNameArray, function(i) {
		$(".input[test2='kk'] select").append(
				"<option value='" + ValueArray[i] + "'>" + MemberNameArray[i]
						+ "</option>");
	})

}

function numToPatientRecord(num) {
	switch (num) {
	case 0:
		return "未支付";
		break;
	case 1:
		return "已支付";
		break;
	case -1:
		return "已关闭";
		break;
	default:
		break;
	}
}
// 姓名 userName
// 就诊科室 deptName
// 看诊医生 doctName
// 预约挂号（总额） totalMoney
// 订单状态 statusId
// 流水号 orderNumber
// 就诊日期 visitTime
// 就诊时间 noonCode
function addOrderInformation(OrderArray) {
	/*
	 * let ODI = new Array(); $.each(OrderArray.orderList, function(i, n) { if
	 * (n.orderId == getUrlParam("orderId")) { ODI = n return false; } });
	 */
	// console.log(ODI);
	$(".Order_userName").html(OrderArray.userName);
	$(".MaxAn[test2='orderList'] .Order_deptName").html(OrderArray.deptName);
	$(".MaxAn[test2='orderList'] .Order_doctName").html(OrderArray.doctName);
	$(".MaxAn[test2='orderList'] .Order_totalMoney").html("￥"+OrderArray.totalMoney);
	$(".MaxAn[test2='orderList'] .Order_statusId").html(numToPatientRecord(OrderArray.statusId));
	$(".MaxAn[test2='orderList'] .Order_orderNumber").html(OrderArray.orderNumber);
	$(".MaxAn[test2='orderList'] .Order_visitTime").html(dateChangeForm(OrderArray.visitTime));
	$(".MaxAn[test2='orderList'] .Order_noonCode").html(numToMornNoon(OrderArray.noonCode));

	if (OrderArray.statusId == 0) {
		// $(".MaxAn[warn2='kimi'] a:eq("+i+") .price").css("color","red");
		$(".MaxAn[warn='orderShowButton']").show();
		// ForInSetCenter(setDivCenterArray);

		setDivWidth(".patientIDCardDetailTips>div");
		setDivWidth("div[test='buttonGreenBg']");

	}
	// orderList[?].orderId==
}

function keWuDeBug001(){setBCenterOfA('.MaxAn[warn="kimi"] .input[test="addMemberOption"]','.MaxAn[warn="kimi"] .input[test="addMemberOption"] img');
setDivHeight(".selectTimeBG_confirm>div");
  setDivWidth(".selectTimeBG_confirm>div");
  setLineHeight(".selectTimeBG_confirm>div");
  setDivWidth(".selectTimeBG_TimeSelectDivide");
  ForInSetCenter([[" .headImg>img",".price>img",".nameAndPrice"],[" .headImg>img",".price>img"],[],[" .doctorName1"],[],[]])
// ForInSetCenter(setDivCenterArray);
$(".doctorCardMax").css("background","#fff");
$(".doctorCardMax>div").width("100%");
// selectFamilyMemberOption(JSonArray_PatientRecord);
// setDivHeight(".doctorName2");
setLineHeightSelf(".doctorName2");
}

var KG_PayPic=false;

var PayPic_FiveSecondArray=["02","01","00"];

function PayPic_FiveSecond(){
  let kk=0;
  let t1=setInterval(function(){
    $(".MaxAn[PayWarn]").find("font").html(PayPic_FiveSecondArray[kk]);
    kk=kk+1;
    if(kk>2){
      KG_PayPic=true;
      clearInterval(t1);
    }
  },1000);
}

// 显示正确页面
function PayWarnToCorrect(){
    $(".MaxAn[testK='PayPic']").hide();
    $(".MaxAn[PayWarn='error']").hide();
    $(".MaxAn[PayWarn='correct']").show();
    PayPic_FiveSecond();
    // console.lo("s");
  }

// 显示错误页面
function PayWarnToError(){
    $(".MaxAn[testK='PayPic']").hide();
    $(".MaxAn[PayWarn='correct']").hide();
    $(".MaxAn[PayWarn='error']").show();
    PayPic_FiveSecond();
  }

function setTimeIntervalTocheckInputsRegular (){

	  let gg2=checkSameInput (".familyMemberInputs[test='resetNewPass'] input",".familyMemberInputs[test='resetNewPassAgain'] input");
	  let gg=checkInputsRegular ([".familyMemberInputs[test='resetNewPass'] input",".familyMemberInputs[test='resetNewPassAgain'] input"],[(/^[a-z0-9_-]{6,16}$/i),(/^[a-z0-9_-]{6,16}$/i)]);
	  if(gg && gg2){
		  $(".confirmOrderToPay ").parent("a").attr("href","javascript:return false");
	    $(".confirmOrderToPay ").css({"background":"#26ad9c","color":"#bde9ec","cursor":"pointer"});
	  }else{
	    $(".confirmOrderToPay ").parent("a").attr("href","javascript:return false");
	    $(".confirmOrderToPay ").css({"background":"#bde9e4","color":"#fff","cursor":"default"});
	  }
	}

function setDoctorInformationCard_DateToDoc(){
	  $(".MaxAn[AnIndex='dateAndPrice']").html("");
	  $(".moreDate .moreDateDate div").css("cursor","default");
	  var newTimeArray=new Array();
	  $.each(sevenTimesJQFor,function(i,n){
	    var py=callBackDate(i+1)[0]+callBackDate(i+1)[1]+callBackDate(i+1)[2];
	    newTimeArray.push(py);
	  });// 最近七天
	      $(".moreDateDate div").removeClass();
	      $(".moreDateDate div").eq(0).attr("class","dateFocus");
	      $(".todayDate>div").html("挂号日期 "+callBackDate(1)[0]+"-"+callBackDate(1)[1]+"-"+callBackDate(1)[2]);
	      $(".moreDateDate div").click(function(j){
	    	  $(' .MaxAn[AnIndex="dateAndPrice"]').html("");
	    	  $(' .MaxAn[warn="NotFoundInformation"]').html("");
	        $(".moreDateDate div").removeClass("dateFocus");
	        $(this).attr("class","dateFocus");
	        var nnn=callBackDate($(this).index()+1);
	        $(".todayDate>div").html("挂号日期 "+nnn[0]+"-"+nnn[1]+"-"+nnn[2]);
	        $(".MaxAn[AnIndex='dateAndPrice'] a").hide();
	        $(".MaxAn[AnIndex='dateAndPrice'] a[test="+nnn[0]+nnn[1]+nnn[2]+"]").show();
	      setLineHeightSelf(".moreDateDate>div");
	      });
	}

function tipsHaveNotDoctor(){ 
	  $(' .MaxAn[warn="NotFoundInformation"]').append('<div class="doctorCardMax" test="doctorCard"><div><div class="doctorInformation" AnDetails="a"><div class="headImg"><img src="./static/image/cry.png" alt=""></div><div class="otherInformation"><div class="nameAndPrice"><div class="name"><div class="doctorName1">暂无出诊医生</div><div class="doctorName2"></div></div><div class="price"><img src="./static/image/rightRow.png" alt=""></div></div></div></div></div></div>');
	   // append('
		// .MaxAn[warn="NotFoundInformation"]',"暂无出诊医生","","./image/cry.png","javascript
		// false");
	    $(".MaxAn[warn='NotFoundInformation'] .doctorName2").css("border","0");
	    $(' .MaxAn[warn="NotFoundInformation"]').find('.price').html("");
	    $(' .MaxAn[warn="NotFoundInformation"]').find('.price').html("");
	    setDivHeight(".MaxAn[warn='NotFoundInformation'] img");
	    setDivHeight(".MaxAn[warn='NotFoundInformation'] .nameAndPrice");
	    setLineHeight(".MaxAn[warn='NotFoundInformation'] .nameAndPrice div");
	    setDivWidth(".MaxAn[warn='NotFoundInformation'] img");
	   }

function dateChangeForm(date1,fen){
	  // 函数分两个参数，第一个为日期，可以是 20151205 纯数字，也可以 2015:12:05
		// 带分隔符。无分隔符时则默认"-"或用第二个参数作分隔符输出，有分隔符则去掉分隔符输出
	  if(date1.length ==12 ){// 判断字符串长度是否为8，是则添加分隔符，否则去除分隔符
	    let kan = "-";
	    if(fen != undefined){
	      kan=fen;
	    }
	    let zhi = date1.substring(0,4)+kan+date1.substring(4,6)+kan+date1.substring(6,8)+" "+date1.substring(8,10)+" : "+date1.substring(10,12);
	    return (zhi);
	  }else if(date1.length == 8 ){
	    let kan = "-";
	      if(fen != undefined){
	        kan=fen;
	      }
	      let zhi = date1.substring(0,4)+kan+date1.substring(4,6)+kan+date1.substring(6,8);
	      return (zhi);
	  }else{
	    let k2=date1.replace(/[^0-9]/ig,"");
	    if(k2!=8 || k2!= 12){
	      return("格式错误！请重新输入！");
	    }
	      return k2;
	  }
	}

// 去除字符算中的空格
function trims(str){  
    return str.replace("  :  ","");
} 

// 判断是不是在微信浏览器中打开
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	if (r != null)
		return unescape(r[2]);
	return null; // 返回参数值
}
/**
 * java时间对象格式化
 */
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
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
      }