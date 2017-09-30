var mongoose = require('mongoose');
var Palindrome = require('../../models/palindrome.js');

var chai = require('chai');
var chaiHttp = require('chai-http')
var expect = chai.expect;
var app = require('../../app')
var should = require('should')


//Require the dev-dependencies
chai.use(chaiHttp);

describe('Palindromes', () =>{

  describe('/GET palindrome', () =>{
    it('it should render index page', (done) =>{
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      });
    });
  });
  describe('/GET palindrome create page', () =>{
    it('it should render create page', (done) => {
      chai.request(app)
      .get('/create')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      });
    });
  });
});
