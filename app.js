const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./app/middleware/error");

const indexRouter = require("./app/routes/indexRoute");
const usersRouter = require("./app/routes/authRoute");
const apiRouter = require("./app/routes/apiRoute");
const adminRouter = require("./app/routes/adminRoute");
const ErrorResponse = require("./app/utils/errorResponse");

//config
const email = "tryaha78@gmail.com";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.set("json spaces", 2);

app.use(logger("dev"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 2, // start blocking after 5 requests
  handler: function (req, res, next) {
    next(new ErrorResponse(`Too many request form this IP`, 429));
  },
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "app/public")));

app.use("/", indexRouter);
app.use("/auth", usersRouter, createAccountLimiter);
app.use("/api", apiRouter);
app.use("/admin", adminRouter);

app.use(errorHandler);

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
  res.render("error", { email });
});

module.exports = app;
