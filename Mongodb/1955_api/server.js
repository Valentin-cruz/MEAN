var express = require("express");
var path = require("path");
var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('./config/mongoose');

app.use(bodyParser.json());

app.use(session({
    secret: 'keepitsecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
}))
const flash = require('express-flash');
app.use(flash());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./config/routes.js')(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log(`listening on port 8000`);
});