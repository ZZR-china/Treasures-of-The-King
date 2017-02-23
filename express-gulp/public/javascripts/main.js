require.config({
    baseUrl: "javascripts/lib",
    paths: {　　　　　　
        "jquery": "http://cdn.bootcss.com/jquery/2.0.0/jquery",
        "unslider": "unslider",
        "modal": "jq.modal",
        "switchDiv": "jq.switchDiv",
        "switchImg": "jq.switchImg",
        "preload": "preload"
    },
    shim: {
        'unslider': {
            deps: ['jquery'],
            exports: 'jQuery.fn.unslider',
        },
        'modal': {
            deps: ['jquery'],
            exports: 'jQuery.fn.modalShow',
        },
        'switchDiv': {
            deps: ['jquery'],
            exports: 'jQuery.fn.switchDiv',
        },
        'switchImg': {
            deps: ['jquery'],
            exports: 'jQuery.fn.switchImg',
        },
    }
});

var requireLib = ['jquery', 'math', 'preload', 'unslider', 'modal', 'switchDiv', 'switchImg'];

require(requireLib, function($, math, preload) {
    // console.log(math.add(1,2));
    var $banner = $('.my-slider');
    $banner.unslider({
        infinite: true,
        // autoplay: true,
        arrows: {
            //  Unslider default behaviour
            prev: '<a class="unslider-arrow prev prevR"></a>',
            next: '<a class="unslider-arrow next nextL"></a>',
        }
    });

    //图片预加载
    var image_path = '/images/';
    images = ['traffic1.png', 'download1.png', 'news1.png', 'pass1.png'];

    preload('js', {
        imgpath: image_path,
        images: images,

    });

    var $homeslider = $('.home-list-slider');
    $homeslider.unslider({
        infinite: true,
        // autoplay: true,
        arrows: {
            prev: '',
            next: '',
        }
    });

    var $backtotop = $('.qr-backtotop');

    $(window).scroll(function() {
        if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
            $backtotop.fadeIn('fast');
        } else if ($(document).scrollTop() + $(window).height() < $(document).height()) {
            $backtotop.fadeOut('slow');
        }
    });

    //回到顶部按钮

    $backtotop.click(function(e) {
        e.preventDefault();
        $(document.body).animate({ scrollTop: 0 }, 800);
    });

    var $iytcSwitch = $('#iytcSwitch li');

    $iytcSwitch.each(function(index, el) {
        $(this).switchDiv({
            cssclass: 'sstitle__li--active',
            act: 'hover'
        });
    });

    var $cointroLi = $('#cointroLi li');

    $cointroLi.each(function(index, el) {
        $(this).switchDiv({
            cssclass: 'cointro__li--active',
            act: 'click'
        });
    });

    //左部图片高亮切换
    var $homeImg = $('.home-list-content .imgBox');
    var $leftImg = $('.ss-left-list-box .imgBox');

    $homeImg.each(function(index, el) {
        var that = this;
        $(this).hover(function() {
            /* Stuff to do when the mouse enters the element */
            $(that).switchImg({
                oldSuffix: '.png',
                newSuffix: '1.png',
            });
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            $(that).switchImg({
                oldSuffix: '1.png',
                newSuffix: '.png',
            });
        });
    });


    $leftImg.each(function(index, el) {

        var that = this;
        $(this).hover(function() {
            /* Stuff to do when the mouse enters the element */
            $(that).switchImg({
                oldSuffix: '.png',
                newSuffix: '1.png',
            });
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            $(that).switchImg({
                oldSuffix: '1.png',
                newSuffix: '.png',
            });
        });
    });

});
