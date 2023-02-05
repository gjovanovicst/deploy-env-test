"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var fs_1 = require("fs");
var server = (0, http_1.createServer)(function (req, res) {
    if (req.url === "/") {
        res.end((0, fs_1.readFileSync)("./index.html", "utf8"));
    }
    else if (req.url === "/about-us") {
        res.end((0, fs_1.readFileSync)("./about.html", "utf8"));
    }
    else {
        res.end("404 Page Not Found");
    }
});
server.listen(3000, function () {
    console.log("Listening on http://localhost:3000");
});
//# sourceMappingURL=index.js.map