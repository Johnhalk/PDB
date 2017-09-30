var mongoose = require('mongoose');
var Palindrome = mongoose.model('Palindrome');


var palindromeController = {};
//Create palindrome
palindromeController.create = function(req, res) {
  res.render('../views/palindromes/create');
};


//Save palindrome
palindromeController.save = function(req, res) {
  var palindrome = new Palindrome(req.body);

  palindrome.save(function(err) {
    if(err){
      console.log(err);
      res.render('../views/palindromes/create');
    } else {
      console.log("Successfully created a Palindrome.");
      res.redirect('/palindromes');
    }
  });
};


// List all palindrome within the last 10mins
palindromeController.list = function(req, res) {
  var endDate=new Date()
  var startDate=new Date(endDate-10*60*1000)
  Palindrome.find({updated_at:{$gte: startDate,$lt: endDate}}).sort({_id:-1}).limit(10).exec(function(err, palindromes) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render('../views/palindromes/index', {palindromes: palindromes});
    }
  });
};

module.exports = palindromeController;
