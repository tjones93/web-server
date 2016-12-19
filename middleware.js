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

module.exports = middleware;