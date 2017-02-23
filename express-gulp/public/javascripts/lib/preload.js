(function(){
  'use strict';
  var $;
  /*===========================
  Preload
  ===========================*/
  var Preload = function (event, params) {
    if (!(this instanceof Preload)) return new Preload(event, params);

    var defaults = {
      imgpath:'',
      images: [],
      css: {
          href:'',
      },
      js: {
          src: '',
      }
    }

    var initialVirtualTranslate = params && params.virtualTranslate;

    params = params || {};
    var originalParams = {};

    for (var param in params) {
        if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
            originalParams[param] = {};
            for (var deepParam in params[param]) {
                originalParams[param][deepParam] = params[param][deepParam];
            }
        }
        else {
            originalParams[param] = params[param];
        }
    }
    for (var def in defaults) {
        if (typeof params[def] === 'undefined') {
            params[def] = defaults[def];
        }
        else if (typeof params[def] === 'object') {
            for (var deepDef in defaults[def]) {
                if (typeof params[def][deepDef] === 'undefined') {
                    params[def][deepDef] = defaults[def][deepDef];
                }
            }
        }
    }

    //Preload
    var p = this;

    p.params = params;

    var image_path = p.params.imgpath,
        images = p.params.images;

    p.ajaxload = function (){
      setTimeout(function(){
        //XHR to request a js and css
        var xhr = new XMLHttpRequest();
        xhr.open('GET', p.params.js);
        xhr.send();
        xhr = new XMLHttpRequest();
        xhr.open('GET', p.params.css);

        //Preload image
        for(var i = 0; i < images.length; i++) {
            var image_preload = new Image();
            image_preload.src = image_path + images[i];
        }

      },1000);
    };


    p.jsload = function (){
      setTimeout(function (){
        //reference to <head>

        var head = document.getElementsByTagName('head')[0];

        if (p.params.css.href != null && undefined ) {
          //new css
          var css = document.createElement('link');
          css.type = 'text/css';
          css.rel = 'stylesheet';
          css.href = p.params.css.href;
          head.appendChild(css);
        }
        //new js
        if (p.params.js.src != null) {
          var js = document.createElement('script');
          js.type = 'text/javascript';
          js.src = p.params.js.src;
          head.appendChild(js);
        }

        if (images != null ) {
          for(var i = 0; i < images.length; i++) {
            var image_preload = new Image();
            image_preload.src = image_path + images[i];
          }
        }

      },1000);

    };

    if (event == 'ajax') {
      p.ajaxload();
    }else if (event == 'js'){
      p.jsload();
    }

    // Return preload instance
    return p;
  };

  /*==================================================
      Prototype
  ====================================================*/
  Preload.prototype = {


  };

  window.Preload = Preload;

})();

/*===========================
Preload AMD Export
===========================*/
if (typeof(module) !== 'undefined')
{
    module.exports = window.Preload;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.Preload;
    });
}