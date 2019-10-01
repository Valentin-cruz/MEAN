
let express = require('express'),
app = express(),
bodyParser= require('body-parser'),
session = require('express-session')
app.use(session({
secret: 'super secret',
resave:false,
saveUninitialized:true
}))
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json())

var bcrypt=require('bcrypt')
var uniqueValidator= require('mongoose-unique-validator')

require('./server/config/mongoose.js')
require('./server/models/User.js')
require('./server/models/Bike.js')
require('./server/config/routes.js')(app)

app.listen(8000, () => {
console.log(`Listening on port 8000`);
})