var mongoose = require('mongoose');
var User = require('./user.js');
let Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    default: '',
  },
  _user: {
  	type: Schema.Types.ObjectId, 
  	ref: 'User'
  }
}, {timestamps: true });

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;