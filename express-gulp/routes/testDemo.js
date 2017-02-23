var express = require('express');
var router = express.Router();

//测试页面

router.get('/', function (req, res, next){
  res.render('test/test', {
    layout:false,
  });
})

router.get('/testimg', function(req, res, next) {
  res.render('test/testimg', {
    layout:'testlayout',
  });
});


//使用AJAX加载图片
router.get('/ajaximg', function (req, res, next){
  res.render('test/imgload', {
    layout:'testlayout',
  })
});

//正则表达式

router.get('/reg', function (req,res,next){
	res.render('test/reg', {
		layout:false,
	});
});

//promise

router.get('/promise', function (req,res,next){
  res.render('test/promise', {
    layout:false,
  });
});

//design mod
router.get('/design', function (req,res,next){
  res.render('test/design', {
    layout:false,
  });
});


module.exports = router;