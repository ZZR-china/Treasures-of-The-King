(function() {
    $.fn.extend({
        switchImg: function(option) {

            var defaultSetting = { oldSuffix: '.png', newSuffix: '1.png' };
            var setting = $.extend(true, defaultSetting, option);
            var oldSuffix = setting.oldSuffix;
            var newSuffix = setting.newSuffix;
            var imgSrc = this.find('img').prop('src');
            var newimgSrc = imgSrc.toString().replace(oldSuffix, '');

            this.find('img').prop('src', newimgSrc + newSuffix);
 
            return this;
        }

    });
})(jQuery);
