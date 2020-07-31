const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://trnghsh:7407985218@incognito-jbclq.mongodb.net/loginsysdb', {useNewUrlParser: true, useUnifiedTopology: true})

var userSchema = new mongoose.Schema({
    email:String, // String is shorthand for {type: String}
    name:String,
    address:String,
    number:Number
  });

  var userModel = mongoose.model('users', userSchema);

  module.exports = userModel;