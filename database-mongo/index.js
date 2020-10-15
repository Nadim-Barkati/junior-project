var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  feedback: String 
});

var User = mongoose.model('User', userSchema);

var selectAll = function(callback) {
  User.find({}, function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};

var addUser= function (user) {
  User.create(user);
}

module.exports.users={selectAll,addUser}