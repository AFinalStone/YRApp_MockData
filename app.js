var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var allianceRouter = require('./routes/alliance');
var appConfigRouter = require('./routes/appConfig');
var communityRouter = require('./routes/community');
var dayTaskRouter = require('./routes/dayTask');
var gradePrivilegeRouter = require('./routes/gradePrivilege');
var homeRouter = require('./routes/home');
var indexRouter = require('./routes/index');
var messageRouter = require('./routes/message');
var onlineRouter = require('./routes/online');
var rechargeRouter = require('./routes/recharge');
var settingRouter = require('./routes/setting');
var userRouter = require('./routes/user');
var userSecondRouter = require('./routes/userSecond');
var wheelRouter = require('./routes/wheel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/phoenix/appConfig', appConfigRouter);
app.use('/phoenix/community', communityRouter);
app.use('/phoenix/daytask', dayTaskRouter);
app.use('/phoenix/gradePrivilege', gradePrivilegeRouter);
app.use('/phoenix/home', homeRouter);
app.use('/phoenix/index', indexRouter);
app.use('/phoenix/recharge', rechargeRouter);
app.use('/phoenix/settingRouter', settingRouter);
app.use('/phoenix/user', userRouter);
app.use('/phoenix/userSecond', userSecondRouter);
app.use('/phoenix/wheel', wheelRouter);
app.use('/phoenix/alliance', allianceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
