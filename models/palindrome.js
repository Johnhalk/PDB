var mongoose = require('mongoose');

var PalindromeSchema = new mongoose.Schema({
  palindrome: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Palindrome', PalindromeSchema);
