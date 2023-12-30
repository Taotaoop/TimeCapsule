var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');  //这个包用来处理跨域，上面没说到
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// 配置全局变量 app.js作用域下所有文件都可以访问common中的db和RunSQL
require(process.cwd() + '/common/sql.js');
require(process.cwd() + '/common/utils.js');

// router
var usersRouter = require('./routes/users');
var uploadfileRouter = require("./routes/uploadfile");

// cors 默认配置就是下面这几项，完全可以写成app.use(cors());
app.use(cors({
  "origin": "*",
  "credentials": true,
  "methods": "GET,POST,PUT,PATCH,DELETE"
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", usersRouter);
app.use("/api", uploadfileRouter);



module.exports = app;

