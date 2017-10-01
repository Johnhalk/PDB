var dbUri = process.env.MONGOHQ_URL || 'mongodb://localhost/project'
var mongoose = require('mongoose');
var db    = mongoose.connect(dbUri);

var Browser = require('zombie');
var app = require('../../app');
var http = require('http').createServer(app).listen(3000);
var chai = require('chai');
var assert = require("chai").assert
var chaiHttp = require('chai-http');
var expect = chai.expect;
var Palindrome = require('../../models/palindrome.js');

Browser.localhost('localhost', 3000);

describe('User visits home page', () => {

  var browser = new Browser();

  before((done) => {
    browser.visit('/', done);
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(done)
  })

  describe('Home page',() => {

    it('should have initial content', () =>{
      expect(browser.html('body')).contain("Create Palindrome")
      expect(browser.html('body')).contain("Palindrome List")
    });

    it('shows no palindromes initially', () => {
      expect(browser.html('body')).contain("No palindromes found.")
    })
  });
});

describe('Create page', () => {

  var browser = new Browser();

  beforeEach((done) => {
    browser.visit('/create', done);
  });

  it('Does not save invalid palindrome', () => {
    browser.fill('palindrome', 'No palindrome')
    browser.pressButton('Check')
    expect(browser.html('p')).contain("False; Is not a palindrome.")
  });

  it('Can save valid palindrome', () => {
    browser.fill('palindrome', 'i test tset i')
    browser.pressButton('Check')
    expect(browser.html('form')).contain("Save")
    expect(browser.html('p')).contain("True; Is a Palindrome!")
    browser.pressButton('Save')
    browser.assert.url('http://localhost/save')
  });

  it('Accepts palindrome if words are upper and lower case', () => {
    browser.fill('palindrome', 'I lOvE eVoL i')
    browser.pressButton('Check')
    expect(browser.html('p')).contain("True; Is a Palindrome!")
  });

  it('Accepts palindrome with special characters involved', () => {
    browser.fill('palindrome', 'I\'m not: sure; what- {Do} &od tahw, erus ton mi')
    browser.pressButton('Check')
    expect(browser.html('p')).contain("True; Is a Palindrome!")
  })
});
