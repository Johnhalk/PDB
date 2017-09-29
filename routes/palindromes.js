var express = require('express');
var router = express.Router();
var palindrome = require('../controllers/PalindromeController.js');

// Create palindrome
router.get('/create', palindrome.create);

// Save palindrome
router.post('/save', palindrome.save);

// Get all palindromes
router.get('/', palindrome.list);

module.exports = router;
