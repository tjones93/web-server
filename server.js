var express = require("express");
var app = express();
var port = 3000;
var hits = 0;

var middleware = {
    requireAuthentication: function (req, res, next) {
        hits += 1;
        console.log("Private route hit " + hits + " times.");
        next();
    },
    logger: function (req, res, next) {
        console.log("Request: " + req.method + " " + req.originalUrl);
        console.log("Site hit on: " + new Date());
        next()
    }
};

//app.use(middleware.requireAuthentication);

app.use(middleware.logger)

app.get("/about", middleware.requireAuthentication, function (req, res) {
    res.send("About me");
});

app.use(express.static(__dirname + "/public"))

app.listen(port, function () {
    console.log("Express server started on port: " + port);
});