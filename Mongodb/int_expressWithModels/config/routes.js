// Lets import our controller. views.py in Django, *_controller.rb in Ruby
// This demo controller exports functions for us to use.
var our_controller = require('../controllers/demo_controller.js');

module.exports = function(app) {
  // /home is the url we are looking for and our_controller.home_function is
  // the function that will run when the server receives a get request.
  app.get('/home', our_controller.home_function);
  app.post('/users', our_controller.create);
  app.post('/users/delete', our_controller.deleteAll);
  app.get('/', our_controller.move);
  app.get('/makecomment/:id', our_controller.showCommentForm);
  app.post('/createcomment/:id', our_controller.createComment);
  //app.get('/users/:id', our_controller.showInfo);
}