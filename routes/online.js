var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})

/** 获取启动页广告信息 */
router.get('/online/getCoopenList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/getCoopenList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/online/getCoopenList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/getCoopenList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/** 获取屏蔽词语关键字 */
router.get('/online/getKeywords', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/getKeywords.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/online/getKeywords', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/getKeywords.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/** 检查更新 */
router.get('/online/checkUpgrade', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/checkUpgrade.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/online/checkUpgrade', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/checkUpgrade.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/** 验证是否当前app处于审核环境 */
router.get('/online/auditInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/auditInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/online/auditInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/auditInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/** 心跳测试 */
router.get('/online/heartbeat', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/heartbeat.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/online/heartbeat', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/online/heartbeat.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

module.exports = router;
