var dbUri = process.env.MONGOHQ_URL || 'mongodb://localhost/project'
var mongoose = require('mongoose');
var db    = mongoose.connect(dbUri)

var Palindrome = require('../../models/palindrome.js');

var chai = require('chai');
var chaiHttp = require('chai-http')
var expect = chai.expect;
var app = require('../../app')
var should = require('should')

chai.use(chaiHttp);

describe('Palindromes', () =>{

  after((done) => {
    mongoose.connection.db.dropDatabase(done)
  })

  describe('/GET palindrome', () =>{
    it('it should render index page', (done) =>{
      chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.type).to.equal('text/html');
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
        expect(res.type).to.equal('text/html');
        done()
      });
    });
  });
  describe('/POST palindrome create page', () =>{
    it('it should post a palindrome',(done) => {
      let palindrome = new Palindrome({palindrome: 'Test tset'});
      palindrome.save((err, palindrome) =>{
        chai.request(app)
        .post('/save')
        .send(palindrome)
        .end((err, res) =>{
          expect(res).to.have.status(200)
          expect(res.type).to.equal('text/html');
          done()
        });
      });
    });
  });
});
