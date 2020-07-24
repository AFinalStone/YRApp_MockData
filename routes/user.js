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

/** 获取新人用户第一进入直播间的相关配置信息 */
router.get('/acthorAutoReplays', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/acthorAutoReplays.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

router.post('/acthorAutoReplays', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/acthorAutoReplays.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**获取手机验证码*/
router.get('/mobileCode', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileCode.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/mobileCode', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileCode.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**用户登录*/
router.get('/login', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/login_06.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/login', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/login_06.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**获取用户常用的链接地址*/
router.get('/getAppConfigUrl', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getAppConfigUrl.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/getAppConfigUrl', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getAppConfigUrl.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**获取用户常用的一些开关配置*/
router.get('/getAppParam', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getAppParam.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/getAppParam', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getAppParam.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**更新用户信息*/
router.get('/updateLoginInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateLoginInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/updateLoginInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateLoginInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**获取引导文档*/
router.get('/getGuidanceDocList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getGuidanceDocList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/updateLoginInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getGuidanceDocList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**自动打招呼*/
router.get('/autoSayHelloUserList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/autoSayHelloUserList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/autoSayHelloUserList', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/autoSayHelloUserList.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**获取用户资料信息*/
router.get('/getUserDetailInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getUserDetailInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/getUserDetailInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getUserDetailInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**更新用户资料编辑页面额外标签*/
router.get('/updateUserInfoExtra', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateUserInfoExtra.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/updateUserInfoExtra', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateUserInfoExtra.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**获取自动打招呼列表*/
router.get('/oneKeySayHelloUserListV610', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/oneKeySayHelloUserListV610ResBean.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/oneKeySayHelloUserListV610', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/oneKeySayHelloUserListV610ResBean.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**手机注册*/
router.get('/mobileRegister', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileRegisterResBean.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/mobileRegister', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/mobileRegisterResBean.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**手机注册*/
router.get('/channelRelevanceAnchor', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/channelRelevanceAnchor.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/channelRelevanceAnchor', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/channelRelevanceAnchor.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**更新用户信息*/
router.get('/updateLoginInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateLoginInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/updateLoginInfo', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/updateLoginInfo.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**通过标记获取用户信息*/
router.get('/getUserInfoByFlag', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getUserInfoByFlag.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/getUserInfoByFlag', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getUserInfoByFlag.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})

/**通过标记获取用户信息*/
router.get('/getGameHall', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getGameHall.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})
router.post('/getGameHall', function(req, res, next) {
    var file = path.join(__dirname, '../', '/data/user/getGameHall.json');
    var json = fs.readFileSync(file, 'utf-8')
    console.log(json)
    res.json(JSON.parse(json))
})


module.exports = router;
