(function() {
  $.fn.extend({
    switchDiv:function (option) {
      var btnVal = $(this).attr('data-show');
      var $switchDiv = $('[val='+btnVal+']');

      var defaultSetting = {cssclass:'active', act: 'hover'};

      var setting = $.extend(true, defaultSetting, option);
      // this.css({'color':setting.color, 'fontSize': setting.fontSize + 'px'});

      var action = setting.act;

      if (action == 'hover') {

        $(this).hover(function(){
          $(this).addClass(setting.cssclass).siblings().removeClass(setting.cssclass);
          $switchDiv.removeClass('hide').siblings().addClass('hide');
        },function () {
          
        });
      } else if(action == 'click'){
        $(this).click(function(){
          $(this).addClass(setting.cssclass).siblings().removeClass(setting.cssclass);
          $switchDiv.removeClass('hide').siblings().addClass('hide');
        });

      }

      return this;
    }
  });
  
})(jQuery);