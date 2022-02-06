const path = require("path");
const logger = require("morgan");
const express = require("express");
const createError = require("http-errors");

const indexRouter = require("./routes/index");
const downloadsRouter = require("./routes/downloads");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

if (process.env.ENV !== "PROD") app.use(logger("dev"));

app.use("/", indexRouter);
app.use("/downloads", downloadsRouter);
app.use(express.static(path.join(__dirname, "public")));

app.use(function (_, _, next) {
  next(createError(404));
});

app.use(function (err, req, res, _) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log(err);
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
