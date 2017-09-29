var mongoose = require('mongoose');

var palindromeSchema = new mongoose.Schema({
  palindrome: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Palindrome', palindromeSchema);
