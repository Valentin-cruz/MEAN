var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
    },
}, {timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;