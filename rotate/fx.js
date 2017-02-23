$(document).ready(function() {
	//checkbox单选
	wechat();
	var $videoModal = $('#videomodal');
	$videoModal.css('height', '235vh');
	$('#fxvideo').click(function(event) {
		/* Act on the event */
		console.log('cloic');
		$videoModal.removeClass('hide');
		$videoModal.find('.modal-close').bind('click', function(event) {
	      /* Act on the event */
	      close();
	    });

	});

	  function close () {
	    $videoModal.addClass('hide');
	  }
	//政策筛选
	$(".search").click(function() {
		$("#search-form").submit();
	})
	
	var  $zd=$('.zd a > div');
	var  $xx=$('.xx a > div');
	var  $tab = $('.tab');
	header();
	newsscroll();
	helper();

	// slider();
	homehover($zd);
	homehover($xx);
	$tab.hover(function(e) {
		/* Stuff to do when the mouse enters the element */
		homeshow(e);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});
});

function browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                document.location.href = "http://demo.kyl.biz:8818/?type=mobile";
            }
}
browserRedirect();

//导航栏函数
function header() {
		var hoverTimer,outTimer;
		var outDuring = 200;
		$("li.nav1").each(function() {
		    var that = this;
		    $(this).hover(
		        function() {
		            //nav 上停留一秒再出现二级导航
		            // timer = setTimeout(function(){
		                clearTimeout(outTimer);
		                $(this).find("p").css('color', "#11719c");
		                hoverTimer = setTimeout(function(){
		                    var index = $(".nav1").index($(that));
		                    if ($(that).attr('name') === 'nonav') {
		                        $(".second-nav").slideUp("slow");
		                        return;
		                    }
		                    $(".second-nav").slideDown("slow");
		                    $(".sec-nav").eq(index - 1).show().siblings().hide();
		                    $(".sec-nav").eq(index - 1).find("ul").show();
		                }, outDuring);
		            },
		            function() {
		                // $(this).find("ul:eq(0)"	).hide();
		                // clearTimeout(timer);
		                $(this).find("p:first-child").css('color', "#666666");
		                $(this).find("p.en").css('color', "#666666");
		            }
		        )
		});
		$(".second-nav").hover(
		    function() {
		        console.log('love');
		    },
		    function() {
		        var that = this;
		        clearTimeout(hoverTimer);
		        outTimer = setTimeout(function(){
		            $(that).find("ul:eq(0)").hide();
		            $(".second-nav").slideUp("slow");
		        }, outDuring);
		    }
		)
}
//home slider
function slider(){
	var slideShow = $('.slider'),   //获取整个div
		ul = slideShow.find('.lists'),		//获取图片列表
		nav = slideShow.find('.slider-nav span'),	//获取导航 span
		moveWidth = ul.find('li').eq(1).width(),  //以单张图片的宽度作为每次移动的宽度
		prev = $('#prev'),
		next = $('#next'),
		timer = null,  //初始化一个定时器
		iNow = 0;

	//	 鼠标hover 的时候停止轮播，鼠标移出的时候继续上次位置开始轮播
	slideShow.hover(function() {
		clearInterval(timer);
	},autoPlay);


	nav.on('click',function() {   // 点击导航span的时候添加active样式
		var me = $(this),
			index = me.index()

		iNow = index;  //解决点击后会回到第一张图片的bug

		ul.animate ({ // 由 css 改为 animate 实现动画效果
			'left': - moveWidth * iNow + 'px'
		})
		nav.removeClass('active');  //添加之前去除active样式，防止重复
		me.addClass('active');

	});
	prev.on('click',function(e) {
		e.preventDefault;
		if(parseInt(ul.css('left')) === 0) ul.css('left','-4800px');
		ul.animate ({ // 由 css 改为 animate 实现动画效果
			'left': parseInt(ul.css('left')) + moveWidth + 'px'
		})
		console.log(iNow)
	});
	next.on('click',function(e) {
		e.preventDefault;
		if(parseInt(ul.css('left')) === -3840) ul.css('left','960px');
		ul.animate ({ // 由 css 改为 animate 实现动画效果
			'left': parseInt(ul.css('left')) - moveWidth + 'px'
		})
	});
	autoPlay();  //初始化的时候先调用 autoPlay
}
function autoPlay() {
	var iNow = 0;
	timer = setInterval(function() {
		iNow++;
		if (iNow > nav.length -1 )
			iNow = 0;
		nav.eq(iNow).trigger('click'); //trigger自动触发事件
	}, 5000);
}
//新闻滚动条
function newsscroll() {
	setInterval(function () {
		$(".news-slider").find("ul:first").animate({
			marginTop: "-60px"
		},500,function() {
			$(this).css({marginTop: "0px"}).find("li:first").appendTo(this);
		});
	},4000);
}

//小的特效函数
function helper() {
	var $good = $('.good');
	var $helper = $('#helper');
	var $close = $('.close-helper button');
	$good.click(function(event) {
		/* Act on the event */
		event.preventDefault();
		console.log('asdasd');
		$helper.show('fast', function() {
		});
	});
	$close.click(function(event) {
		/* Act on the event */
		$helper.fadeOut('fast', function() {
			
		});
	});
}
//首页滑动特效
function homehover(name){
	name.hover(function(e) {
		/* Stuff to do when the mouse enters the element */
		mousehover(e);
	}, function(e) {
		/* Stuff to do when the mouse leaves the element */
		mouseout(e);
	});
}
function mousehover(e){
	var tab = e.currentTarget;
	var newUrl = ($(tab).find("span").attr("src"));
	$(tab).addClass('activexx').siblings().removeClass('activexx');
	$(tab).find('img').attr('src',newUrl);
}
function mouseout(e){
	var tab = e.currentTarget;
	var oldUrl = ($(tab).find("span").attr("oldsrc"));
	$(tab).removeClass('activexx');
	$(tab).find('img').attr('src',oldUrl);
}

function homeshow(e) {
	var tab = e.target;
	var index = $('.tab').index(tab);
	$(tab).addClass('active').siblings().removeClass('active');
	$('.tab-items .box-item').eq(index).show().siblings().hide();
}


function wechat () {
	var $wechatcode = $('.wechatcode');
	var $erweima = $('.wechat-erweima');
	
	$wechatcode.hover(function(){
		$erweima.removeClass('hide');
	},function(){
		$erweima.addClass('hide');
	})
}