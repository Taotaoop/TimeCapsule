var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors"); //?????????????????????????

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var uploadfileRouter = require("./routes/uploadfile");
var uploadFormRouter = require("./routes/uploadForm");

// 配置全局变量 app.js作用域下所有文件都可以访问common中的db和RunSQL
require(process.cwd() + "/common/sql.js");
require(process.cwd() + "/common/utils.js");
var app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "GET,POST,PUT,PATCH,DELETE",
  })
);



// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", usersRouter);
app.use("/api", uploadfileRouter);
app.use("/api", uploadFormRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
