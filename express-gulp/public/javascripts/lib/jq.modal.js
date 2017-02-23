(function() {
  $.fn.extend({
    modalShow:function () {
      var btnVal = this.attr('data-val');
      var $wantModal = $('[val='+btnVal+']');
      this.bind('click', function(event) {
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