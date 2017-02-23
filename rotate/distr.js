$(document).ready(function() {
	var $distr = $('.distribute li');
	var $east = $('#east');
	var $importantli = $('.important li');
	var silderul = $('.slider-content ul');
	var $slider = $('.slider-content ul li');
	var $inews  = $('#importantContent .news div');
	var url = getUrlParam('val') ||'xincailiao';
	console.log(url);

	$('.news div').each(function () {
		if ($(this).attr('id') == url) {
			$(this).removeClass('hide').siblings().addClass('hide');
			$(this).siblings().find('span').removeClass('hide');
		}
	})

	
	importantslider();
	$importantli.click(function(event) {
		/* Act on the event */
		importantli(event);
	});
	$slider.click(function(e) {
		slidertarget(e);
	});
});

function importantslider () {
	$('#importantContent').removeClass('hide');
	// $('#east').addClass('active');
	// 重点产业轮播
	var sWidth = $("#importantslider").width(); //获取焦点图的宽度（显示面积）
	var len = $("#importantslider ul li").length; //获取焦点图个数
	var Lwidth = $("#importantslider ul li img").width();
	var left = parseInt($("#importantslider ul").css('left'));
	var index = 0;
	var picTimer;
	var $arrowLeft = $(".slider .arrow-left");
	var $arrowRight = $(".slider .arrow-right");
	//上一页按钮
	console.log(len);
	console.log('焦点图',Lwidth);
	$arrowLeft.bind('click', function(){
		lastArrow();
	});
	//下一页按钮
	$arrowRight.bind('click', function (){
		nextArrow();
	});

	function lastArrow () {
		
		index -= 1;
	    if(index == -1) {
	    	index = 0;
	    }
	    showPics1(index);
	    console.log('上一页',index);
	}
	function nextArrow () {
		index += 1;
		if(index == 3) {
			index = 0;
		}
		showPics1(index);
		console.log('下一页',index);
	}

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#importantslider ul").css("width",(len+1)*140);
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics1(index) { //普通切换
	    var nowLeft = -index*130; //根据index值计算ul元素的left值
	    $("#importantslider ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	}
	//重点产业点击滑动特效
	$('.slider-content ul li').each(function () {
		var that = this;
		$(this).hover(function () {
			var img = $(that).find('img').attr('src');
			var jpg = '.jpg';
			var img1 = img.toString().replace(jpg, '');
			// console.log(img1);
			$(that).find('img').attr('src',img1 + '1.jpg');
		}, function () {
			$(that).removeClass('blue');
			var img = $(that).find('img').attr('src');
			var jpg = '1.jpg';
			var img1 = img.toString().replace(jpg, '');
			// console.log(img1);
			$(that).find('img').attr('src',img1 + '.jpg');
		});
	});
	//入驻企业轮播
	var sWidth = $("#getinCo").width(); //获取焦点图的宽度（显示面积）
	var len = $("#getinCo ul li").length; //获取焦点图个数
	var Lwidth = $("#getinCo ul li img").width();
	var left = parseInt($("#getinCo ul").css('left'));
	var index = 0;
	var picTimer;
	//上一页按钮
	$(".cos .arrow-left").click(function() {
	    index -= 1;
	    if ($("#getinCo ul").css('left') == '0px') {
	    	return;
	    } else if(index == -1) {
	    	index = len - 1;
	    	showPics(index);
	    }
	});
	//下一页按钮
	$(".cos .arrow-right").click(function() {
	    index += 1;
	    if(index == len-3 || left < -560 ) {index = 0;}
	    showPics(index);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#getinCo ul").css("width",len*140);
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
	    var nowLeft = -index*140; //根据index值计算ul元素的left值
	    $("#getinCo ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
	}
}

function distributeclick (e) {
	var target = e.target;
	var target = event.target;
	if ($(target).index() != 0) {
		$(target).addClass('active').siblings().removeClass('active');
	}
	var targetId = $(target).attr('id');
	$('.fourboxs .box').each(function () {
		if ($(this).attr('data-dir') == targetId) {
			$(this).removeClass('hide').siblings().addClass('hide');
		}
	});
	$('.jqPaginator').removeClass('hide');
	$('.important li').removeClass('active');
}

function importantli (e) {
	var target = event.target;
	var val = $(target).attr('val');
	if ($(target).index() != 0) {
		$(target).addClass('active').siblings().removeClass('active');
	}
	$('#rightImportant div').each( function (e) {
		if ($(this).attr('id') == val) {
			$(this).removeClass('hide').siblings().addClass('hide');
		} else {}
	})
	$('#industrialD').addClass('hide');
	$('.distribute li').removeClass('active');
}

function slidertarget(e) {
	var target = e.currentTarget;
	var datacon = $(target).attr('data-con');
	$('.news div').each(function () {
		if ($(this).attr('id') == datacon) {
			$(this).removeClass('hide').siblings().addClass('hide');
		}
	});
}

function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r!=null) return unescape(r[2]); return null; //返回参数值
}

function appendimgName(name) {
	var img = $(this).find('img').attr('src');
	var type = '.jpg';
	var img1 = img.toString().replace(type, '');
	$(that).find('img').attr('src',img1+ name + type);
}