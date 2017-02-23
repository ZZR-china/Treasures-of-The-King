(function() {
  $.fn.extend({
    changeColor:function (option) {
      var defaultSetting = {color:'red', fontSize:'14'};
      var setting = $.extend(true, defaultSetting, option);
      this.css({'color':setting.color, 'fontSize': setting.fontSize + 'px'});
      return this ;
    },
    modalShow:function () {
    	var btnVal = $(this).attr('data-val');
    	var $wantModal = $('[val='+btnVal+']');
      $(this).bind('click', function(event) {
        /* Act on the event */
    	  $wantModal.removeClass('hide');
      });

    	$wantModal.find('.modal-close').bind('click', function(event) {
        /* Act on the event */
        close();
      });
      function close () {
        $wantModal.addClass('hide');
      }
      return this;
    },
  });
  
})(jQuery);
