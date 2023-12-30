var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');  //��������������������û˵��
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// ����ȫ�ֱ��� app.js�������������ļ������Է���common�е�db��RunSQL
require(process.cwd() + '/common/sql.js');
require(process.cwd() + '/common/utils.js');

// router
var usersRouter = require('./routes/users');
var uploadfileRouter = require("./routes/uploadfile");

// cors Ĭ�����þ��������⼸���ȫ����д��app.use(cors());
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

