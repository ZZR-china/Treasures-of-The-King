var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {});
});

//新闻中心--新闻动态
router.get('/newstrends', function(req, res, next) {
  res.render('news/newsTrends', {});
});


//新闻中心--简报
router.get('/bulletin', function(req, res, next) {
  res.render('news/newsBulletin', {});
});


//创业园概况--创业园简介
router.get('/introduce', function(req, res, next) {
  res.render('overview/introduce', {});
});

//创业园概况--领导小组
router.get('/leaderteam', function(req, res, next) {
  res.render('overview/leaderteam', {});
});

//创业园概况--接待中心
router.get('/visitorcenter', function(req, res, next) {
  res.render('overview/visitorcenter', {});
});

//创业园概况--联系我们
router.get('/contactus', function(req, res, next) {
  res.render('overview/contactus', {});
});

//创业政策--最新创业政策
router.get('/newestpolicy', function(req, res, next) {
  res.render('policy/newestpolicy', {});
});

//创业政策--千人计划创业园政策
router.get('/qrjhpolicy', function(req, res, next) {
  res.render('policy/qrjhpolicy', {});
});

//创业政策--产业扶持政策
router.get('/industrypolicy', function(req, res, next) {
  res.render('policy/industrypolicy', {});
});

//创业政策--张江扩区扶持政策
router.get('/zjpolicy', function(req, res, next) {
  res.render('policy/zjpolicy', {});
});

//创业服务--准入标准
router.get('/standard', function(req, res, next) {
  res.render('servesyb/standard', {});
});


//创业服务--创业资金
router.get('/sybfund', function(req, res, next) {
  res.render('servesyb/sybfund', {});
});


//创业服务--创业咨询
router.get('/sybconsult', function(req, res, next) {
  res.render('servesyb/sybconsult', {});
});


//创业服务--资料下载
router.get('/download', function(req, res, next) {
  res.render('servesyb/download', {});
});


//人才服务--资格认定
router.get('/recognition', function(req, res, next) {
  res.render('servetalents/recognition', {});
});


//人才服务--留言台
router.get('/advice', function(req, res, next) {
  res.render('servetalents/advice', {});
});


//人才服务--千人计划联谊会
router.get('/sodality', function(req, res, next) {
  res.render('servetalents/sodality', {});
});



//人才服务--联谊会活动
router.get('/sodalityevent', function(req, res, next) {
  res.render('servetalents/sodalityevent', {});
});




//人才服务--联谊会介绍
router.get('/sodalityintro', function(req, res, next) {
  res.render('servetalents/sodalityintro', {});
});

//人才服务--滨海贤人旅游卡介绍
router.get('/IYTC', function(req, res, next) {
  res.render('servetalents/IYTC', {});
});

//企业风采--企业介绍
router.get('/cointro', function(req, res, next) {
  res.render('mien/cointro', {});
});

//企业风采--专家风采
router.get('/expert', function(req, res, next) {
  res.render('mien/expert', {});
});




module.exports = router;
