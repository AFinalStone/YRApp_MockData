var express = require('express');
var router = express.Router();

var fs = require('fs')
var path = require('path')

router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/** 测试方法 */
router.get('/message/videoInvitation', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/videoInvitation.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/message/videoInvitation', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/videoInvitation.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
/** 测试方法 */
router.get('/message/getFreeChatInviteTimeList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getFreeChatInviteTimeList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/message/getFreeChatInviteTimeList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/getFreeChatInviteTimeList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/** 下播一键感谢 */
router.get('/message/sendUserMsg', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/sendUserMsg.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/message/sendUserMsg', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/message/sendUserMsg.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})


module.exports = router;
