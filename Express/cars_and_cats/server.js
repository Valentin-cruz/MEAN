var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
    console.log("Listening on port: 8000");
})