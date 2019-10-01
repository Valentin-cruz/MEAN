//!Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
mongoose.Promise = global.Promise;

//!Config
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "owls",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

//!Database
mongoose.connect("mongodb://localhost/owls_dashboard");

var OwlSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Owl name required!"], minlength: 3},
    age: {type: Number, required: [true, "Owl age required!"], min: 1, max: 100},
    color: {type: String, required: [true, "Owl color required!"], minlength: 3}
    }, {timestamps: true});
    mongoose.model("Owl", OwlSchema);
    var Owl = mongoose.model("Owl");

//!Routes
//? Render INDEX
app.get("/", function(req, res){
    console.log("~Root~");
    Owl.find({}, function(err, owls){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            res.render("index", {info: owls});
        }
    })
});

//? Render NEW PAGE
app.get("/owls/new", function(req, res){
    console.log("~New Form~");
    res.render("new");
});

//? Render SHOW/EDIT PAGE
app.get("/owls/:_id", function(req, res){
    console.log("~Show~")
    Owl.findOne({_id:req.params._id}, function(err, owl){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            res.render("edit", {owl:owl});
        }
    })
});

//? Render EDIT PAGE
app.get("/owls/edit/:_id", function(req, res){
    console.log("~Edit Page~");
    Owl.findOne({_id:req.params._id}, function(err, owl){
        if(err){
            console.log("Error mactching DB request!~", err);
        }
        else{
            res.render("edit", {owl:owl});
        }
    })
});

//? Create POST 
app.post("/owls", function(req, res){
    console.log("~Post~", req.body);
    var owl = new Owl({name: req.body.name, age: req.body.age, color: req.body.color});
    owl.save(function(err){
        if(err){
            console.log("~Something added an owl!~", err);
            for(var key in err.errors){
                req.flash("owlform", err.errors[key].message);
            }
            res.redirect("/owls/new");
        }
        else{
            console.log("~Successfully added an owl!~");
            res.redirect("/");
        }
    })
});

//? Edit POST
app.post("/owls/:_id", function(req, res){
    console.log("~Edit~");
    Owl.findOne({_id:req.params._id}, function(err, owl){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            Owl.update({_id: owl._id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color}}, function(err){
                if(err){
                    console.log("~Error updating~", err);
                }
                else{
                    res.redirect("/");
                }
            })
        }
    })
});

//? Destroy POST
app.post("/owls/destroy/:_id", function(req, res){
    console.log("~Destroy~");
    Owl.findOne({_id:req.params._id}, function(err, owl){
        if(err){
            console.log("~Error matching DB request!~", err);
        }
        else{
            Owl.remove({_id:owl._id}, function(err){
                if(err){
					console.log("~Error on delete!~", err);
				}
				else{
					res.redirect("/");
				}
            })
        }
    })
});

//!Port
app.listen(7000, function(){
    console.log("Listening on port: 7000");
})