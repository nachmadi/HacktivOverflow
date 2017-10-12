const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
  {
    email: String,
    user_pass: String,
    nama: String,
    salt: String
  }
)

User = mongoose.model('User', UserSchema);

module.exports = User;
