const express = require("express");
const app = express();


const seriesRouter1 = require("./api/routes/series");
const seriesRouter2 = require("./api/routes/movies");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
app.use("/series",seriesRouter1);
app.use("/movies",seriesRouter2);

module.exports = app;