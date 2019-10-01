var mongoose = require('mongoose');
var Comment = require('./comment.js')

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  comments: [Comment]
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;