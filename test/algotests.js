//npm install mocha
var expect = require('chai').expect;
var fizzbuzz = require('../algos/fizzbuzz.js');
var rps = require('../algos/rockPaperScissors.js');
var Stack = require('../algos/Stack.js');
var mergeSort = require('../algos/mergeSort.js');
var romanNumerals = require('../algos/romanNumerals.js');

describe('Fizzbuzz Algorithm', function(){
	it('length', function(){
		expect(fizzbuzz(3)).to.have.length(3);
	});
	it('Fizz', function(){
		expect(fizzbuzz(15)[2]).to.equal('fizz');
	});
	it('Buzz', function(){
		expect(fizzbuzz(15)[4]).to.equal('buzz');
	});
	it('Fizzbuzz', function(){
		expect(fizzbuzz(15)[14]).to.equal('fizzbuzz');
	});
	it('Fizzbuzz at Large Numbers', function(){
		expect(fizzbuzz(400)[359]).to.equal('fizzbuzz');
	});

});



describe('Rock Paper Scissors Algorithm', function(){
	it('length with input 2 should equal 9', function(){
		expect(rps(2)).to.have.length(9);
	});
	it('should return all combinations of results for 2 games', function() {
    var actual = rps(2);
    var expected = [['rock','rock'],['rock','paper'],['rock','scissors'],['paper','paper'],['paper','scissors'],['paper','rock'],['scissors','scissors'],['scissors','paper'],['scissors','rock']];
    expect(actual).to.have.length(expected.length);
    actual.sort();
    expected.sort();
    expect(actual).to.eql(expected);
  });

 });


var stack;
describe('Stack', function() {

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have a push, pop and getMax method', function() {
    expect(stack).to.have.property('push');
    expect(stack).to.have.property('pop');
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.getMax).to.be.a('function');
  });

  it('should push elements to stack, pop them off and return max', function() {
    stack.push(0);
    expect(stack.pop()).to.eql(0);
    stack.push(5);
    stack.push(9);
    stack.push(6);
    expect(stack.getMax()).to.eql(9); 
  });


});


describe('Mergesort Algorithm', function(){
	it('should sort arrays', function(){
		expect(mergeSort([3,5,1,9,2])).to.eql([1,2,3,5,9]);
	});
	  it('should sort very large arrays', function() {
    var largeArray = makeList(10000);
    var clone = largeArray.slice();
    expect(mergeSort(clone)).to.eql(largeArray.sort(inc));
  });

});

function makeList(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random()*num));
  }
  return arr;
}

function inc(a,b) {
  return a-b;
}


describe('RomanNumerals Algorithm', function(){
	it('should return a string', function(){
		expect(romanNumerals(13)).to.be.a('string');
	});
	it('should work on small numbers', function(){
		expect(romanNumerals(17)).to.eql('XVII');
	});
	it('should work on larger numbers', function(){
		expect(romanNumerals(3217)).to.eql('MMMCCXVII');
	});
	

});










