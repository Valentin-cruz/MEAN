var User = require('../models/user.js');
var Comment = require('../models/comment.js');
// Export functions for our routes.js file to use. This is where the logic of
// your server will go.
module.exports = {

  home_function: function(req, res){
    // In order to display a page with data we need to render. The first argument
    // render needs is the file. Here, it is index.ejs. Express knows where to find
    // this file because in server.js we told express where our views are.

    // Next, render needs an object. The key, or property in this object will be
    // the name we can use in our ejs file ('users' here) and the value will
    // be what is stored in that property (the users_array from above).
    User.find({}, function(err, users) {
      if (err) {
        res.redirect('/users')
      }
      else {
        console.log('\n \nThe person "logged in" right now is the User with _id', req.session['user_id'])
        console.log('\n \nHere are all the users and their comments:\n', users)
        res.render('index', {all_users: users, user_id: req.session['user_id']});
      }
    });
  },

  create: function(req, res){
    //console.log("req.body is", req.body)
    // ...create a new document to store in the User collection and save it to the DB.
    let user = new User();
    //console.log("user before assignments is", user)
    user.name = req.body.name;
    user.email = req.body.email;
    //console.log("user before save is", user)
    user.save()
    .then(newUser => {
        req.session['user_id'] = newUser._id
        //console.log(req.session['user_id'])
        res.redirect('/home')
    })
    .catch(err => res.json(err));
 // If there's an error and the record was not saved, this (err) will contain validation errors.
  },

  deleteAll: function(req, res){
    // ...delete all documents of the User collection
    User.remove()
    .then(deletedUsers => {
        console.log("Deleted all Users");
        res.redirect('/home')
    })
    .catch(err => res.json(err));
  },

  move: function(req, res){
    res.redirect('/home')
    },

  createComment: function(req, res){
    //console.log("req.body is", req.body)
    // ...create a new document to store in the User collection and save it to the DB.
    let comment = new Comment();
    //console.log("comment before assignments is", comment)
    comment.content = req.body.content;
    comment._user = req.params.id;
    //console.log("comment before save is", comment)
    comment.save()
    .then(newComment => {
      User.find({_id : req.session['user_id']}, function(err, this_user){
      if (err) {
        res.redirect('/home')
      }
      else {
        //console.log("the user is", this_user)
        //console.log("the new comment is", newComment)
        this_user[0].comments.push(newComment)
        this_user[0].save()
        res.redirect('/home')
      }
    });
    })
    .catch(err => res.json(err));
 // If there's an error and the record was not saved, this (err) will contain validation errors.
  },

  showCommentForm: function(req, res){
    console.log(req.session['user_id'])
    res.render('comment', {user_id: req.session['user_id']})
  }

}