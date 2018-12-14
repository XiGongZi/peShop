namespace函数库手册//180628

	An.Public

		1.setLineHeight(a)//使文字高与父级等高（居中）
		
		2.setLineHeightSelf(a)//使文字高与父父级等高（居中）

		3.setDivHeight(a)//使div垂直居中

		4. setDivWidth(a)//使div横向居中

		5.setDivMarginLeft(a)//使用marginleft居中

		6.checkSameInput(inputA,inputB)//检查两个input是否重复（非空），重复则返回true，否则返回false

		7.checkInputText2 (inputA,inputB)//检查两个input是否同时不为空，是则返回true，否则返回false。

		8. checkInputText1(input)//检查input是否不为空，不为空则返回true，否则返回false

		9.  addSubmit  (inputs,regulars,element)//检查inputs和regulars匹配，并在指定位置(element)上决定是否添加submit类。

		10. checkInputsRegular (inputs,regulars)//检测inputs数组与对应的正则数组，都对应则返回true，否则返回false

		11. CCC(a)//a为数组，内只含布尔值 全部为真时返回真，否则返回假    every函数,给定条件去筛选

		12.resetLeftPlace(a,b)//获取a的左边距，并赋给b

		13.logRegTipsCheck2 (inputs,regulars)//回调一个数组，按序为各个inputs与正则的匹配结果

		14.numToCZH(a)//星期几数字转汉字

		15.callBackDate(a)// console.log(callBackDate(5))     0是当前天，负几就是往前推几天，正几就是几天后,返回值为数组，共四个值，分别为当前年份，当前月份，当前日期，当前星期。

		16.getBrowserInfo()//查询浏览器类型

		17. setBCenterOfA(a,b)//设置b高度居中a

		18.getUrlParam(a)//获取地址栏

		19.PayPic_Second()//三秒倒计时等待

	An.Index

		1.loadStyle(url)//动态加载css

		2.loadScript(url)//动态加载js

		3.getPageName()//获取页面名称(无视后缀名)

		4.isRepeat(arr)//判断数组是否存在重复元素，存在返回true，否则返回false
		
		5.loadStylePre(url)//动态在head内最前面加载css

	An.Slide

		1.ResizeBanner()//重置小圆点位置

		2.slideTab()//设置banner循环

	An.const

		1.enter_ten__boxHei//enter_ten 的宽高比值

	An.Main

		1.ctrlHei()//控制enter_ten宽高

		2.An.main.enter_ten_HTML()//添加十个入口html

// 20180703  公子熄
// 本体系构建于20180626，其主要目的是构建一个可以复用的，快速出成品的体系。
// 
// css上采用css3 的自定义属性（变量），将可改动的属性值作为变量集中在AnIndex.css文件内，方便修改。
// 
// js上采用函数式编程，全部封装成函数，使用命名空间，动态加载css js，使每页需要单独使用的js封装在AnMain.js文件内。
// 
// html采用组件化的构建方式，对内容物dom结构存放于函数内动态调用，并动态请求服务器取出数据填充。
// 
// 预计成品出来后，可以通过对css的修改进行快速换肤，可以针对不同需求增加组件函数库，。