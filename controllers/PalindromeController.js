var mongoose = require('mongoose');
var Palindrome = mongoose.model('Palindrome');

//Create palindrome
palindromeController.create = function(req, res) {
  res.render('../views/palindrome/create');
};


//Save palindrome
palindromeController.save = function(req, res) {
  var palindrome = new Palindrome(req.body);

  palindrome.save(function(err) {
    if(err){
      console.log(err);
      res.render('../views/palindrome/create');
    } else {
      console.log("Successfully created a Palindrome.");
      res.redirect('/palindrome/show');
    }
  });
};

// List all palindrome
palindromeController.list = function(req, res) {
  Palindrome.find({}).exec(function(err, palindromes) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render('../views/palindrome/index', {palindromes: palindromes});
    }
  });
};

module.exports = palindromeController;
