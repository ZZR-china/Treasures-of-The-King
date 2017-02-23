(function($) {

    var methods = {
        init: function(options) {

            return this.each(function() {
                $(window).bind('resize.tooltip', methods.reposition);
            });

        },
        destroy: function() {

            return this.each(function() {
                $(window).unbind('.tooltip');
            })

        },
        reposition: function() {
            // ... 
        },
        show: function() {
            // ... 
        },
        hide: function() {
            // ... 
        },
        update: function(content) {
            // ...
        }
    };

    $.fn.tooltip = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }

    };

})(jQuery);


// $('#fun').tooltip();
// Some time later...
// $('#fun').tooltip('destroy');


// 调用  init 方法
// $('div').tooltip(); 

// 调用  init 方法
// $('div').tooltip({
//   foo : 'bar'
// });


// 调用 hide 方法
// $('div').tooltip('hide'); 


// 调用 update 方法
// $('div').tooltip('update', 'This is the new tooltip content!');


// apply()方法说明
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
